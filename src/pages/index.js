import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjOne2, homeObjOne3, homeObjOne0 } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
  
  const Home = () => {
      const [isOpen, setIsOpen] = useState(false)

      const toggle = () => {
          setIsOpen(!isOpen)
      }


      return (
          <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <HeroSection />
          <InfoSection {...homeObjOne0} />
          <Services />
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjOne2} />
        
          <InfoSection {...homeObjOne3} />
          <Footer />



          </>
      )
  }
  
  export default Home
  