import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import Cart from '../Cart/index';
import Header from '../ProductsHeader/index';
import SelectSize from '../FilterSize/index';
import ProductsList from '../ProductsList/index';
import {StyledDashboard,StyledSelectSizeContainer,StyledSignOutButton,StyledProductListAndHeaderContainer,StyledCartContainer,StyledDashboardHeader,StyledContent} from './styledComponents';

@inject("productStore","authStore")
@observer
class EcommerceDashboard extends Component{
    
    onSignOut = () => {
        const {authStore:{clearToken}} = this.props;
        clearToken();
        this.props.history.replace('/');
    }
    
    render() {
        return (
            <StyledDashboard>
                <StyledDashboardHeader>
                    <StyledSignOutButton onClick={this.onSignOut}>
                        {`Sign Out`}
                    </StyledSignOutButton>
                    <StyledCartContainer>
                        <Cart/>
                    </StyledCartContainer>
                </StyledDashboardHeader>
                
                <StyledContent>
                    <StyledSelectSizeContainer>
                        <SelectSize/>
                    </StyledSelectSizeContainer>
                    <StyledProductListAndHeaderContainer>
                        <Header/>
                        <ProductsList/>
                    </StyledProductListAndHeaderContainer>
                </StyledContent>
            </StyledDashboard>
        );
    }
}

export default EcommerceDashboard;