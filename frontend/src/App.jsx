import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate , Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Header from './pages/Header'

import RefreshHandler from './components/RefreshHandler';

function App() {
  const [count, setCount] = useState(0)

  const [isAuthenticated ,setIsAuthenticated] =useState(false);

  const PrivateRoute =({element}) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }


  //  toast.success("hi");

  return (
   <>

    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    <ToastContainer 
      autoClose={1000}
    />

   
    <Header/>

     
    {/* <button onClick={()=>toast.success("you clicked here")} >Hello</button> */}

    <Routes>
      <Route path = "/login" element= {<Login/>}  />
      <Route path = "/signup" element= {<Signup/>}  />
      <Route path = "/home" element= {<PrivateRoute element={<Home  />} /> }  /> 
    </Routes>


   </>
  )
}

export default App
