import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
}