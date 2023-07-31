import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/style.css';
import Header from './component/Header';
import Read from './component/Read-more';
import SignIn from './component/Sign-in';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <div className='container'>
    <Header/>

    </div>
    <Routes>
        
        <Route path='/' element={<App/>}/>
        
        <Route  path='/read/more' element={<Read/>}/>
        <Route path='/signup' element={<SignIn/>}/>
        <Route path="/login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
    , document.getElementById('root'));