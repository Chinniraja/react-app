import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {StyledAuthenticationContainer,StyledUserInputError,StyledInputFieldContainer,StyledPasswordInputError,StyledUserInput,StyledUserPassword,StyledLoginButton,StyledHeader} from './styledComponents';

const DisplayMessage = (props) => {
    return <div>{props.children}</div>;
};

@observer
class SignInForm extends Component{
    
    userNameRef = React.createRef();
    userPasswordRef = React.createRef();
        
    componentDidMount(){
        const {access_token} = this.props;
        if(access_token === undefined){
            this.userNameRef.current.focus();
        }
    }
    
    render(){
        const {access_token,onChangeUsername,onChangePassword,onSubmit,userName,password,isSubmit,isInputFieldEmpty} = this.props;
        console.log(access_token);
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
                        <StyledUserInput ref={this.userNameRef} data-testid="test-user" type="text" placeholder="Username" value={userName} onChange={onChangeUsername}/>
                        {(userName === '' && isInputFieldEmpty) && <StyledUserInputError>{`invalid username`}</StyledUserInputError>}
                    </StyledInputFieldContainer>
                    <StyledInputFieldContainer>
                        <StyledUserPassword type="password" placeholder="Password" ref={this.userPasswordRef} value={password} onChange={onChangePassword}/>
                        {(password === '' && isInputFieldEmpty) && <StyledPasswordInputError>{`incorrect password`}</StyledPasswordInputError>}
                    </StyledInputFieldContainer>
                    <StyledLoginButton onClick={onSubmit} isSubmit={isSubmit}>
                    {
                        !isSubmit ? "Sign in" : <Loader type="TailSpin" color="gray" text-align="center" height={20} width={20}/>
                    }
                    </StyledLoginButton>
                    <DisplayMessage>{null}</DisplayMessage>
                </StyledAuthenticationContainer>
            );
        }
    }
}

export default SignInForm;