import React from 'react';
import {Route} from 'react-router-dom';
import EcommerceDashboard from '../components/EcommerceDashboard/index';
const ecommerceRoutes = <Route exact path="/ecommerce-store/products" component={EcommerceDashboard}/>;

export default ecommerceRoutes;