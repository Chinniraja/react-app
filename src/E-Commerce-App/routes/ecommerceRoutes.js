import React from 'react';
import {Route} from 'react-router-dom';
import {observer,inject} from 'mobx-react';
import EcommerceDashboard from '../components/EcommerceDashboard/index';
import {ProtectedRoute} from '../../Authentication/routes/AuthenticationRoutes';
const ecommerceRoutes = <ProtectedRoute exact path="/ecommerce-store/products" component={EcommerceDashboard}/>;

export default ecommerceRoutes;