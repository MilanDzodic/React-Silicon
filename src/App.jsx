import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Brands from './components/brands'
import Appfeatures from './components/Appfeatures'
import HowWork from './components/HowWork'
import MakeMoney from './components/MakeMoney'
import Clientsloving from './components/Clientsloving'
import Faq from './components/Faq'
import Subscribe from './components/subscribe'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Appfeatures />
      <HowWork />
      <MakeMoney />
      <Clientsloving />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
