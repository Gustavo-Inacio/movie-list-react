import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Other from './pages/Other'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path='/other' element={<Other></Other>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
