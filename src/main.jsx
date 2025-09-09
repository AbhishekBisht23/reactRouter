import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './component/Home/Home.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './component/About/About.jsx'
import Contact from './component/Contactus/Contact.jsx'
import Layout from './Layout.jsx'
import { Route } from 'react-router-dom'
import User, { getUserInfo } from './component/User/User.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route loader={getUserInfo} path='user' element={<User/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
