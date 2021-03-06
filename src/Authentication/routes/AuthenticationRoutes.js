import React from 'react';
import {observer,inject} from 'mobx-react';
import {Redirect,Route} from 'react-router-dom';

const ProtectedRoute = inject("authStore")(observer(({component:Component,path,authStore,...rest}) => {
    const {access_token} = authStore;
    return <Route {...rest} render={(props) => (
    access_token !== undefined
    ?   <Component/>
    
    :   <Redirect to={{
            pathname:'/'
        }}/>
    )}/>;
}));
export {ProtectedRoute};