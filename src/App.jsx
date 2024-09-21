import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';



function App() {

  return (
    <>
    <MantineProvider >
      <RouterProvider router={router} />
     </MantineProvider>
    </>
  )
}

export default App
