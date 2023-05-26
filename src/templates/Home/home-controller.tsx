/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import HomeView from './home-view'
import { getPage } from '../../utils'
import { DataResponde, PropsPage, Data } from '../../types'




function HomeController() {
  const [data, setData] = useState<Data>({} as Data)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    getPage('home').then((res: DataResponde | string) => {
      if (typeof res === 'string') return
      setData(res.data as Data)
    }).catch((err:string) => {
      console.error("🚀 ~ file: home-controller.tsx:8 ~ HomeController ~ err", err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  const viewProps: PropsPage = {
    data: data,
    loading,
  }
  return (
    <HomeView  {...viewProps} />
  )
}

export default HomeController