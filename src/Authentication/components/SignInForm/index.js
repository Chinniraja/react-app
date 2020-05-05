import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import Loader from 'react-loader-spinner';
import {StyledAuthenticationContainer,StyledUserInput,StyledUserPassword,StyledLoginButton,StyledHeader} from './styledComponents';

@inject("authStore")
@observer
class SignInForm extends Component{
    @observable userName=''
    @observable password=''
    @observable isSubmit = false
    
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
    }
    
    render(){
        const {authStore:{access_token}} = this.props;
        if(access_token !== undefined){
            return (
                <Redirect to={{
                    pathname:'/ecommerce-store/products'
                }}/>    
            );
        }
        else {
            return (
                <StyledAuthenticationContainer>
                    <StyledHeader>{`Sign in`}</StyledHeader>
                    <StyledUserInput type="text" placeholder="Username" value={this.userName} onChange={this.onChangeUsername}/>
                    <StyledUserPassword type="password" placeholder="Password" value={this.password} onChange={this.onChangePassword}/>
                    <StyledLoginButton onClick={this.onSubmit} isSubmit={this.isSubmit}>
                    {
                        !this.isSubmit ? "Sign in" : <Loader type="TailSpin" color="gray" text-align="center" height={20} width={20}/>
                    }
                    </StyledLoginButton>
                </StyledAuthenticationContainer>
            );
        }
    }
}

export default SignInForm;