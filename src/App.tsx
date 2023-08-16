import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Root } from './routes/root'
import { SignIn } from './routes/signIn'
import { SignUp } from './routes/signUp'

export const App: React.FC = () => {
  // これはあくまでも視覚化するもの
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: 'signin',
      element: <SignIn />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
  ])

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}
