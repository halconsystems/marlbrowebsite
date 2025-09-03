import MainBreadcum from '@/components/BreadCum'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PromotionBanner from '@/components/PromotionBanner'
import OurServices from '@/components/Service'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <MainBreadcum name='Our Services' pageName='Our Services'/>
      <OurServices />
      <PromotionBanner/>
      <Footer/>
    </div>
  )
}

export default page
