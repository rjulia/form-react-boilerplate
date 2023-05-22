import { useEffect, useState } from 'react'
import FormPageView from './form-page-view'
import { getPage, GetPageResponse } from '../../utils'
import { DataResponde, PropsPage } from '../../types'


const FromPageController = () => {
  const [data, setData] = useState<DataResponde>({} as DataResponde)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    getPage('forms-page').then((res: GetPageResponse | string) => {
      if (typeof res === 'string') return
      setData(res)
    }).catch((err:string) => {
      console.log("🚀 ~ file: home-controller.tsx:8 ~ HomeController ~ err", err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  const viewProps: PropsPage = {
    data: data.data,
    loading,
  }
  return (
    <FormPageView {...viewProps}/>
  )
}

export default FromPageController