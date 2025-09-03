import MainBreadcum from '@/components/BreadCum'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PromotionBanner from '@/components/PromotionBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <MainBreadcum name='Contact Us' pageName='Contact Us' />
      <ContactForm/>
      <PromotionBanner/>
      <Footer/>
    </div>
  )
}

export default page
