import React from 'react';
import { useSelector } from 'react-redux';
import {Store } from '../services/RootState';


import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function MainRoute() {
     const isLoggedIn = useSelector((state: Store) => state.auth.isLoggedIn);
           
     return isLoggedIn ? <AppRoutes /> : <AuthRoutes/>
}

export default MainRoute;