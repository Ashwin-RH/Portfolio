import Navbar from './components/Navbar'
import AboutSection from './components/Sections/AboutSection'
import ContactSection from './components/Sections/ContactSection'
import Footer from './components/Sections/Footer'
import HeroSection from './components/Sections/HeroSection'
import ProjectSection from './components/Sections/ProjectSection'
import SkillsSection from './components/Sections/SkillsSection'
import { ThemeProvider } from './context/ThemeContext'
import { Toaster } from 'react-hot-toast';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // when adding any new section make sure to add the classname for below div as className='pb-[100vh]'
  return (
    <ThemeProvider>
      <div> 
        <Toaster position="top-center" />
        {showSplash ? (
          <SplashScreen />
        ) : (
          <>
          <ScrollProgress/>
          <Navbar/>
        <HeroSection/>
        {/* <SkillsSection /> */}
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        </>
        )}
        <Analytics />
      </div>
    </ThemeProvider>
    
  )
}      

export default App