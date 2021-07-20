import React from 'react';

// Components
import Header from './Header';

interface ILayout {
  children: React.ReactElement;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
