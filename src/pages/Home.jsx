import React, { Component } from 'react'
import Header from '../component/Header';
import Footer from '../component/Footer';
import MainSection from '../component/MainSection';
import About from '../component/About';
import Projects from '../component/Projects';
import Form from '../component/Form';

export default class Home extends Component {
  render() {
    console.log(`    Quer entrar em contato comigo? 
    Me mande um email! 
    mathewsrodrigues9@gmail.com`)
    return (
      <>
      <Header />
      <MainSection />
      <About />
      <Projects />
      <Form />
      <Footer />
      </>
    )
  }
}
