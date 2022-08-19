import { any } from 'prop-types';
import React from 'react'
import { Navigate, Outlet } from 'react-router'
type auth ={
     auth: string
}
const Private : React.FunctionComponent<auth> = () => {
    const auth = localStorage.getItem('loggedData');
  return auth ? <Outlet /> : <Navigate to='/' />
}

export default Private