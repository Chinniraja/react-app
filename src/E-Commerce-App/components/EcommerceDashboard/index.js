import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {observer,inject} from 'mobx-react';
import Cart from '../Cart/index';
import Header from '../ProductsHeader/index';
import SelectSize from '../FilterSize/index';
import ProductsList from '../ProductsList/index';
import {Pagination} from '../Pagination';
import {StyledDashboard,StyledSelectSizeContainer,StyledSignOutButton,StyledProductListAndHeaderContainer,StyledCartContainer,StyledDashboardHeader,StyledContent} from './styledComponents';

@inject("productStore","authStore")
@observer
class EcommerceDashboard extends Component{
    
    onSignOut = () => {
        const {authStore:{clearToken},productStore:{clearStore}} = this.props;
        clearToken();
        clearStore();
    }
    
    render() {
        return (
            <StyledDashboard data-testid="ecommerce-store">
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
                        <Pagination/>
                    </StyledProductListAndHeaderContainer>
                </StyledContent>
            </StyledDashboard>
        );
    }
}

export default EcommerceDashboard;