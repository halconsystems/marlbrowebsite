import About from '@/components/About'
import MainBreadcum from '@/components/BreadCum'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PromotionBanner from '@/components/PromotionBanner'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <MainBreadcum name='About Us' pageName='About Us'/>
      <About/>
      <PromotionBanner/>
      <Footer/>
    </div>
  )
}

export default AboutUs
