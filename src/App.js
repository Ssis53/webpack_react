import React, { Component } from 'react'
import Header from './components/header/Header';
import Routes from './Routes';

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  )
}

export default App