import React from 'react'
import CardBlog from './components/CardBlog'
import Cources from './components/Cources'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Obzor from './components/Obzor'
import Painting from './components/Painting'
import Portfolio from './components/Portfolio'
import VideoBlog from './components/VideoBlog'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Cources />
      <Painting />
      <VideoBlog />
      <Obzor />
      <Portfolio />
      <CardBlog />
      <Footer />

    </>
  )
}

export default App