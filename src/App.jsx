import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Other from './pages/Other'
import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'

function App() {

  const [searchShowQuery, setSearchShowQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchShowQuery == '') {
      setSearchShowQuery("Home")
    }
  }, [searchShowQuery]);

  return (
    <BrowserRouter>
      <Navbar setSearchShowQuery={setSearchShowQuery} setIsSearching={setIsSearching}/>
      <Routes>
          <Route index element={<Home searchShowQuery={searchShowQuery} isSearching={isSearching} ></Home>}></Route>
          <Route path='/other' element={<Other></Other>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
