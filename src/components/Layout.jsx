import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: calc(100vh - 160px); // Adjust based on header/footer height
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <div className="container">{children}</div>
      </Main>
      <Footer />
    </>
  );
};

export default Layout; 