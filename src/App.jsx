import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Other from './pages/Other'
import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'

function App() {

  const [searchShowQuery, setSearchShowQuery] = useState('');

  useEffect(() => {
    console.log(searchShowQuery);
  });

  return (
    <BrowserRouter>
      <Navbar setSearchShowQuery={setSearchShowQuery} />
      <Routes>
          <Route index element={<Home searchShowQuery={searchShowQuery} ></Home>}></Route>
          <Route path='/other' element={<Other></Other>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
