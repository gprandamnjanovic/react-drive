import React from 'react';
import Driver from './components/Driver/Driver';
import Find from './components/Find/Find';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Lux from './components/Lux/Lux';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Lux />
      <Footer />
    </>
  );
}

export default App;
