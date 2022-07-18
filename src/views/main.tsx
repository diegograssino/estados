import React from 'react';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import GlobalStyle from '../shared/styles/global';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar></Navbar>
      <main>Main</main>
      <Footer></Footer>
    </>
  );
};

export default Main;
