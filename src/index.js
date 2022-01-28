import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './components/Home/Home';
import { Characters } from './components/Characters/Characters';
import { NavBar } from './components/Nav/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Episodes } from './components/Episodes/Episodes';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/characters' element={<Characters/>}/>
      <Route path='/episodes' element={<Episodes />} />
      <Route path='*' element={<Navigate replace to='/'/>}/>
     
      </Route>
   </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


