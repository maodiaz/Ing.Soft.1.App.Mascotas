import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu'

const Layout = (props) => {
  return (
    <>
      <Menu />
      <Outlet />
    </>  
  )
}

export default Layout;