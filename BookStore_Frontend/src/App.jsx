import './App.css'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainPage from './Components/MainPage'
import Data from './Components/MainComponents/Data'
import DataById from './Components/DataById'
import BookCart from './Components/BookCart'
import Navbar from './Components/MainComponents/Navbar'
import AboutEbook from './Components/MainComponents/AboutEbook'
import Checkout from './Components/CheckOut'
import NotFoundPage from './Components/NotFoundPage'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<MainPage/>}/>
      <Route path='/' element ={<AboutEbook/>}/>
      <Route path='/add-book' element={<Data/>}/>
      <Route path='/book/:bookId' element={<DataById/>}/>
      <Route path='/cart' element={<BookCart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
