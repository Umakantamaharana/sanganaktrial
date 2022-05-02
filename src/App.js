import './App.css'
import Home from './components/home/Home'
import About from './components/About/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './components/register/Register'
import Login from './components/login/Login';
import ResponsiveAppBar from './components/navbar/AppBar';
import Footer from './components/footer/Footer'
import { Com } from './components/committee/Com';

// import {useState, useEffect} from 'react'

function App() {
  // const [data, setData] = useState([{}])
  // useEffect(() => {
  //   fetch("/time").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //     }
  //   )
  // },[])
  return (
    <Router>
    <ResponsiveAppBar/>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/committee' element={<Com />} />
    </Routes>
    <Footer />
    </Router>
  )
}

export default App
