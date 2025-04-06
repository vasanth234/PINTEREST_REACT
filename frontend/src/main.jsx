import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import homePage from './routes/homepage/homePage';
import AboutPage from './routes/aboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import createPage from './routes/createPage/createPage';
import postPage from './routes/postPage/postPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<homePage />} />
        <Route path="/create" element={<createPage />} />
        
      
        <Route path="/pin/:id" element={<postPage/>}>
         
          <Route path="details" element={<AppDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
