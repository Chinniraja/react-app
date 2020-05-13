import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import {FiShoppingCart} from 'react-icons/fi';
import CartFooter from '../CartFooter';
import CartList from '../CartList';

import {StyledCartImageContainer,StyledCartHeader,StyledCloseBtn,StyledCartListContainer,Styledcount,StyledImageContainer,StyledHeaderContainer,StyledProductsCount} from './styledComponents';

@inject("cartStore")
@observer
class Cart extends Component{
    @observable isOpen = false
    
    openCart = () => {
        this.isOpen = !this.isOpen;
    }
    
    render(){
        const {cartStore:{productsCount}} = this.props;
        if(!this.isOpen){
            return (
                <StyledCartImageContainer>
                    <StyledImageContainer>
                        <FiShoppingCart  onClick={this.openCart} data-testid="cart-open-button"/>
                    </StyledImageContainer>
                    <Styledcount>{productsCount}</Styledcount>
                </StyledCartImageContainer>
            );
        }
        else {
            return (
                <StyledCartListContainer>
                    <StyledCloseBtn onClick={this.openCart} data-testid="cart-close-button">{`X`}</StyledCloseBtn>
                    <StyledHeaderContainer>
                        <StyledCartHeader>
                            <StyledImageContainer isOpen={this.isOpen}>
                                <FiShoppingCart/>
                            </StyledImageContainer>
                            <StyledProductsCount>{productsCount}</StyledProductsCount>
                        </StyledCartHeader>
                        <CartList/>
                        <CartFooter/>
                    </StyledHeaderContainer>
                </StyledCartListContainer>
            );
        }
    }
}

export default Cart;