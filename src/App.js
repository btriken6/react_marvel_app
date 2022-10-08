import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
// import Pagination from './components/Pagination';
import MarvelGallery from './components/MarvelGallery';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
function App() {
  return (
    <>
    <Navbar/>
    <Search/> 
    {/* <Pagination/> */}
    <Routes>
      <Route path='/' element={<MarvelGallery/>}/>
      <Route path="/details/" element={<DetailView/>}/>
      <Route path="/details/:id" element={<DetailView/>}/>
      <Route path="/list_view/*" element={<ListView/>}/>
    </Routes>
    </>
  );
}

export default App;
