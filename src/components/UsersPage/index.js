import React,{Component} from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';
// import stores from '../../stores/index';
import NoDataView from '../common/NoDataView/index';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index';

// const userStore = stores.usersStore;

@inject("usersStore")
@observer
class UsersPage extends Component{
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    doNetworkCalls = () =>{
        this.props.usersStore.getUsers();
    }
    
    renderUsersList = () => {
        const {users} = this.props.usersStore;
        if(users.length === 0){
            return <NoDataView/>;
        }
        return users.map((userName) => <div>{userName}</div>);
    }
    
    
    render(){
        const {getUsersApiStatus,getUsersApiError} = this.props.usersStore;
        return (
            <LoadingWrapperWithFailure
                apiStatus={getUsersApiStatus}
                apiError={getUsersApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderUsersList}
            />    
        );
    }
}

export default UsersPage;