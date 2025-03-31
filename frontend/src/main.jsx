import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import homePage from './routes/homepage/homePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route  path="/"  element={<homePage/>}  />
     </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);
