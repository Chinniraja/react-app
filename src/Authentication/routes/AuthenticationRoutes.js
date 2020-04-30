import React from 'react';
import {Route} from 'react-router-dom';

import SignInForm from '../components/SignInForm/index';

const authenticationRoutes = <Route exact path="/" component={SignInForm}/>;

export default authenticationRoutes;