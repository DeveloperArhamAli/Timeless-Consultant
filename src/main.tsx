import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import HajjUmrahPage from './pages/HajjUmrahPage.tsx'
import SuccessStoriesPage from './pages/SuccessStoriesPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/services",
        element: <ServicesPage />
      },
      {
        path: "/hajj-umrah",
        element: <HajjUmrahPage />
      },
      {
        path: "/success-stories",
        element: <SuccessStoriesPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
