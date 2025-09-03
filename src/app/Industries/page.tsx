import MainBreadcum from '@/components/BreadCum'
import Footer from '@/components/Footer'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Navbar from '@/components/Navbar'
import PromotionBanner from '@/components/PromotionBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <MainBreadcum name='Industries We Serve' pageName='Industries We Serve'/>
      <IndustriesWeServe/>
      <PromotionBanner/>
      <Footer/>
    </div>
  )
}

export default page
