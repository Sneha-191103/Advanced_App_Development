import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/User/login'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import LandingPage from './pages/User/landingPage'
import FAQPage from './pages/User/faqPage'
import GalleryPage from './pages/User/gallery'
import ContactPage from './pages/User/contact'
import Sidebar from './pages/Admin/sidebar'
import Dashboard from './pages/Admin/dashboard'
import Themes from './pages/Admin/themes'
import Cakes from './pages/Admin/cake'
import Menu from './pages/Admin/menu'
import Event from './pages/User/event'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Routes>
        <Route path='sidebar' element={<Sidebar/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="theme" element={<Themes/>}/>
                <Route path="cake" element={<Cakes/>}/>
                <Route path="menu" element={<Menu/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
