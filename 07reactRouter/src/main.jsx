import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Footer from './components/footer/Footer.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Home/>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
