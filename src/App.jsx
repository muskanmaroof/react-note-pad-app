import { useForm } from 'react-hook-form';
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <ViewPaste/>
    </div>,
    },
    {
      path: '*',
      element: <NotFound />,
    }
  ]
)


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
