import Footer from '@/components/home/utils/Footer';
import Navbar from '@/components/home/utils/Navbar';
import ServiceTab from '@/components/services/_components/ServiceTab';
import { probemgmImg } from '@/components/services/_constants';
import { probemgmInfo } from '@/components/services/_constants';
import React from 'react'

function Page() {
  return (
    <>
    <Navbar />
    <ServiceTab title="MacroProbe Global Manager (MGM) v1.3" price={1500} imgLink={probemgmImg} info={probemgmInfo} />
    <Footer />
    </>
  )
}

export default Page;
