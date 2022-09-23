import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Signup from './popup/Signup';
import Login from './popup/Login';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';
import BelowFooter from './components/BelowFooter';
import Stories from './components/Stories';
import ViewPost from './components/ViewPost';
import MyStory from './components/MyStory';
import EditPost from './popup/EditPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='signup' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>  
        </Route>
        
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/post' element={<CreatePost/>}/>


        <Route path='/stories' element={<Stories/>}/>
        <Route path='/stories/:id' element={<ViewPost/>}/>
        <Route path='/mypost' element={<MyStory/>}/>
        <Route path='/mypost/:id' element ={<EditPost/>}/>
      </Routes>
      <Footer/>
      <BelowFooter/>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
