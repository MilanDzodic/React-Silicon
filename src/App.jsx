import { useState } from 'react'
import './assets/css/styling.css'
import Header from './components/Header'
import Heros from './components/Heros'
import Brands from './components/Brands'
import Appfeatures from './components/AppFeatures'
import HowWork from './components/HowWork'
import MakeMoney from './components/MakeMoney'
import Clientsloving from './components/Clientsloving'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <Header />
        <Heros />
        <Brands />
        <Appfeatures />
        <HowWork />
        <MakeMoney />
        <Clientsloving />
        <Faq />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}

export default App
