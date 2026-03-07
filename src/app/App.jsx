import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from '../pages/Header';
import Landing from '../pages/Landing';

export default function App() {
  return (
      <BrowserRouter>

          <Routes>
              <Route 
                path='/'
                element={
                  <>
                    <Header/>
                    <Landing/>
                  </>
                }
              />

          </Routes>

      </BrowserRouter> 
  );
}
