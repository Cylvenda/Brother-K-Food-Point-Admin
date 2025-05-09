import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import SideBar from './Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/AddProducts/Add'
import Order from './Pages/Orders/Order'
import List from './Pages/ProductList/List'
import { ToastContainer } from 'react-toastify';


function App() {

    const URL = "http://localhost:5000";
      
  return (
      <>
      <ToastContainer />
      <Navbar />

      <hr />

      <div className="app-content">
        <SideBar />

        <Routes>
          <Route path='/Add' element={<Add URL={URL} />} />
          <Route path='/Orders' element={<Order URL={URL} />} />
          <Route path='FoodList' element={<List URL={URL} />} />
        </Routes>

      </div>
      </>
  )
}

export default App
