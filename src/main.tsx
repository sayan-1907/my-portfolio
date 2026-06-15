import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import './styles.css' // We will rename index.css to styles.css

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute])

// Create the query client
const queryClient = new QueryClient()

// Create the router instance
const router = createRouter({ 
  routeTree,
  context: { queryClient } 
})

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)