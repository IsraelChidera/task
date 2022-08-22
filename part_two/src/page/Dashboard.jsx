import React from 'react';
import Main from '../components/widget/Main';
import Sidebar from '../components/widget/Sidebar';
import Box from '../components/ui/Box';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../components/widget/AddProduct';
const Dashboard = () => {
  return (
    <Box className='dashboard relative'>
      <Box className="sidebar w-48 fixed top-0 left-0 ">
        <Sidebar className=''/>
      </Box>

      <Box className='main pl-48 w-full'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<AddProduct/>}/>
        </Routes>
        
      </Box>
    </Box>
  )
}

export default Dashboard