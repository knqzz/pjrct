import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import {Routes, Route, BrowserRouter } from 'react-router-dom';

import Escola from './inicial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Escola />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
