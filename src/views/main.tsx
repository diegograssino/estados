import React from 'react';
import Navbar from '../shared/components/navbar/Navbar';
import Footer from '../shared/components/footer/Footer';
import MainContent from './MainContent';
import styled from 'styled-components';
import GlobalStyle from '../shared/styles/global';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <MainContent />
        <Footer />
      </Layout>
    </>
  );
};

export default Main;
