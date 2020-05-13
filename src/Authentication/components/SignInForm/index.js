import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {StyledAuthenticationContainer,StyledUserInputError,StyledInputFieldContainer,StyledPasswordInputError,StyledUserInput,StyledUserPassword,StyledLoginButton,StyledHeader} from './styledComponents';

@observer
class SignInForm extends Component{
    render(){
        const {access_token,onChangeUsername,onChangePassword,onSubmit,userName,password,isSubmit,isInputFieldEmpty} = this.props;
        if(access_token !== undefined){
            return (
                <Redirect to={{
                    pathname:'/ecommerce-store/products',
                }}/>    
            );
        }
        else {
            return (
                <StyledAuthenticationContainer>
                    <StyledHeader>{`Sign in`}</StyledHeader>
                    <StyledInputFieldContainer>
                        <StyledUserInput data-testid="test-user" type="text" placeholder="Username" value={userName} onChange={onChangeUsername}/>
                        {(userName === '' && isInputFieldEmpty) && <StyledUserInputError>{`invalid username`}</StyledUserInputError>}
                    </StyledInputFieldContainer>
                    <StyledInputFieldContainer>
                        <StyledUserPassword type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                        {(password === '' && isInputFieldEmpty) && <StyledPasswordInputError>{`incorrect password`}</StyledPasswordInputError>}
                    </StyledInputFieldContainer>
                    <StyledLoginButton onClick={onSubmit} isSubmit={isSubmit}>
                    {
                        !isSubmit ? "Sign in" : <Loader type="TailSpin" color="gray" text-align="center" height={20} width={20}/>
                    }
                    </StyledLoginButton>
                </StyledAuthenticationContainer>
            );
        }
    }
}

export default SignInForm;