import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import MoviePage from './pages/MoviePage'
import Footer from './components/Footer/Footer'

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
      <main style={{minHeight: `80vh`}}>
        <Routes>
            <Route index element={<Home searchShowQuery={searchShowQuery} isSearching={isSearching} ></Home>}></Route>
            <Route element={ <MoviePage /> } path='/show/:imdbID' ></Route>
        </Routes>

      </main>
      <div className='mt-20'>asas</div>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
