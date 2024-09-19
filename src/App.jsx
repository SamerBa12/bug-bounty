import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
import { MantineProvider } from '@mantine/core'


function App() {

  return (
    <>
    <MantineProvider>
      <RouterProvider router={router} />
      </MantineProvider>
    </>
  )
}

export default App
