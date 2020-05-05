import React from 'react';
import {observer,inject} from 'mobx-react';
import {Redirect,Route} from 'react-router-dom';

const ProtectedRoute = inject("authStore")(observer(({component:Component,path,authStore,...rest}) => {
    alert(authStore.access_token);
    console.log(Component);
    return <Route {...rest} render={(props) => (
    authStore.access_token !== undefined
    ?   <Redirect to={{
            pathname:'/ecommerce-store/products'
        }}/>
    :   <Component/>
    )}/>;
}));
export {ProtectedRoute};