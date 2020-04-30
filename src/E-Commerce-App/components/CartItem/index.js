import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {StyledCartItem,StyledImage,StyledItemTitle,StyledItemDescription,StyledDeleteAndPriceContainer,StyledPrice,StyledDescription,StyledQuatity,StyledDeleteButton} from './styledComponents';

@inject("cartStore")
@observer
class CartItem extends Component {
    
    onDeleteItemFromCart = () => {
        const {eachItem,cartStore:{onDeleteItem}} = this.props;
        onDeleteItem(eachItem);
    }
    
    render() {
        const {eachItem:{image,title,style,id,quantity,price,currencyFormat}} = this.props;
        return (
            <StyledCartItem id={id}>
                <StyledImage src={image}/>
                <StyledItemDescription>
                    <StyledItemTitle>{title}</StyledItemTitle>
                    <StyledDescription>{style}</StyledDescription>
                    <StyledQuatity>{`Quantity: ${quantity}`}</StyledQuatity>
                </StyledItemDescription>
                <StyledDeleteAndPriceContainer>
                    <StyledDeleteButton onClick={this.onDeleteItemFromCart}>{`X`}</StyledDeleteButton>
                    <StyledPrice>{`${currencyFormat} ${price}`}</StyledPrice>
                </StyledDeleteAndPriceContainer>
            </StyledCartItem>
        );
    }
}

export default CartItem;