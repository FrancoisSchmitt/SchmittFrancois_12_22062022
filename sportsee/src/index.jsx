import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Accueil from './Pages/Accueil';
import Error from './Pages/Error';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Layout/Header';
import Nav from './Components/Layout/Sidebar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <Header />
                  <Nav />
                  <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/dashboard/:id" element={<Dashboard />} />
                        <Route path="/404" element={<Error />} />
                        <Route path="*" element={<Error />} />
                  </Routes>
            </BrowserRouter>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
