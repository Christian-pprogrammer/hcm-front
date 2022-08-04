import React from 'react'
import About from './components/About'
import Accountsection from './components/Accountsection'
import AppSteps from './components/AppSteps'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Newssection from './components/Newssection'
import Reviews from './components/Reviews'
import Services from './components/Services'

const HomePage = () => {
  return (
    <>
    <header>
        <Header/>
    </header>
    <main>
        <Hero/>
        <Accountsection/>
        <About/>
        <AppSteps/>
        <Services/>
        <Reviews/>
        <Newssection/>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default HomePage