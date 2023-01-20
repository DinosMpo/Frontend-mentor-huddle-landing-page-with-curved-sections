import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  )
}
