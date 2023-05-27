import { useEffect, useState } from 'react'
import FormPageView from './form-list-view'
import { getPage } from '../../utils'
import { DataResponde, PropsPage, Data } from '../../types'


const FromPageController = () => {
  const [dataPage, setDataPage] = useState<Data>({} as Data)
  const [dataForms, setDataForms] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)

    const page: Promise<DataResponde | string> = getPage('forms-page')
    const forms: Promise<DataResponde | string> = getPage('forms')

    Promise.all([page, forms])
      .then((res: (string | DataResponde)[]) => {
        if (typeof res === 'string')  {
          console.log(res)
          return
        } else {
          const page = res[0] as DataResponde
          const forms = res[1] as DataResponde
          setDataPage(page.data as Data)
          setDataForms(forms.data as Data[])

        }
      }).catch((err) => {
        console.log("🚀 ~ file: home-controller.tsx:8 ~ HomeController ~ err", err)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  const viewProps: PropsPage = {
    data: dataPage,
    dataForms: dataForms,
    loading,
  }
  return (
    <FormPageView {...viewProps} />
  )
}

export default FromPageController