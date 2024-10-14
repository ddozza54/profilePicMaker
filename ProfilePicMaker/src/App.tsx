import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router'

function App() {
  return (
    <div>
      APP
      <RouterProvider router={router} />
    </div>
  )
}

export default App
