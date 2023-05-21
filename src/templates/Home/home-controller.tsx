import React, { useEffect, useState } from 'react'
import HomeView from './home-view'
import { getHomePage, GetHomePageResponse } from '../../utils'
import { Data } from '../../types'

interface DataResponde {
  data: Data
  status: number
}

function HomeController() {
  const [data, setData] = useState<DataResponde>({} as DataResponde)
  const [lodaing, setLodaing] = useState<boolean>(true)

 

  useEffect(() => {
    setLodaing(true)
    const resp = getHomePage().then((res: GetHomePageResponse | string ) => {
      console.log("🚀 ~ file: home-controller.tsx:8 ~ HomeController ~ res", res)
      if(typeof res === 'string') return
      setData(res)
    }).catch((err) => {
      console.log("🚀 ~ file: home-controller.tsx:8 ~ HomeController ~ err", err)
    }).finally(() => {
      setLodaing(false)
    })
  }, [])


  const viewProps = {
    data,
    lodaing,
  }
  return (
    <HomeView  {...viewProps}/>
  )
}

export default HomeController