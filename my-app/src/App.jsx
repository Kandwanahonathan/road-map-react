import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Chat from './mini-chat/chat'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './rooter/home'
// import Contact from './rooter/contact'
// import Portifolio from './rooter/portifolio'
import Header from './2router/header'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Header">header</Link>
    </nav>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
      
    </Routes>
    </BrowserRouter>
    {/* <Header/> */}
    {/* <Home/>
    <Portifolio/>
    <Contact/> */}
    {/* <Chat/> */}
    {/* <BrowserRouter>
    
    <nav style={{ padding:"15px 300px 12px"}}>
      <Link to="/" style={{textDecoration:"none",padding:"50px", color:'green'}}>Home</Link>
      <Link to="/Contact" style={{textDecoration:"none",padding:"50px", color:'green'}}>Contact</Link>
      <Link to="/portifolio" style={{textDecoration:"none",padding:"50px", color:'green'}}>Portifolio</Link>
      <link to="/Header" style={{textDecoration:"none",padding:"50px", color:'green'}}>Header</link>
    </nav>
    <hr />
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/portifolio" element={<Portifolio />} />
  <Route path="./2router/header" element={<Header/>}> </Route>
</Routes>

    </BrowserRouter> */}
    </>
  )
}

export default App
