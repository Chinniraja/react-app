import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import {Route} from 'react-router-dom';
import SignInForm from '../../components/SignInForm/';

@inject("authStore")
@observer
class SignInPageRoute extends Component {
    @observable userName=''
    @observable password=''
    @observable isSubmit = false
    @observable isInputFieldEmpty = false
    
    
    onChangeUsername  = () => {
        this.userName = event.target.value;
    }
    
    onChangePassword = () => {
        this.password = event.target.value;
    }
    
    onSubmit = () => {
        const {authStore:{getToken}} = this.props;
        if(this.userName !== '' && this.password !== ''){
            getToken();
            this.isSubmit = !this.isSubmit;
            setTimeout(()=> {
                this.props.history.push('/ecommerce-store/products');
            },2000);
        }
        else {
            this.isInputFieldEmpty = true;
        }
    }
    render() {
        const {userName,password,isSubmit,onChangeUsername,onChangePassword,onSubmit,isInputFieldEmpty} = this;
        const {authStore:{access_token}} = this.props;
        return (
            <Route path="/">
                <SignInForm 
                    userName={userName}
                    password={password}
                    isSubmit={isSubmit}
                    onSubmit={onSubmit}
                    access_token={access_token}
                    onChangeUsername={onChangeUsername}
                    onChangePassword={onChangePassword}
                    isInputFieldEmpty={isInputFieldEmpty}
                />
            </Route>
        );
    }
}

export {SignInPageRoute};