/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import HomeView from './home-view'
import { getHomePage, GetHomePageResponse } from '../../utils'
import { DataResponde, PropsPage } from '../../types'




function HomeController() {
  const [data, setData] = useState<DataResponde>({} as DataResponde)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    getHomePage('home').then((res: GetHomePageResponse | string) => {
      if (typeof res === 'string') return
      setData(res)
    }).catch((err) => {
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
    <HomeView  {...viewProps} />
  )
}

export default HomeController