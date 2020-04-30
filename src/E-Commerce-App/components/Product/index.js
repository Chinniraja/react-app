import React,{Component} from 'react';
import AddToCart from '../AddToCart/index';
import {StyledProductContainer,StyledImage,StyledFreeShipping,StyledSeparator,StyledDescription,StyledPrice,StyledInstallments,StyledImageAndShippingContainer} from './styledComponents';

class Product extends Component {
    render() {
        const {eachProduct,eachProduct:{image,isFreeShipping,title,price,installments,currencyFormat}} = this.props;
        const installmentAmount = price/installments;
        const installment = installments ?  `or ${installments} x ${currencyFormat} ${installmentAmount.toFixed(2)}` : 'No Installments';
        return (
            <StyledProductContainer>
                <StyledImageAndShippingContainer>
                    {isFreeShipping && <StyledFreeShipping>{'Free Shipping'}</StyledFreeShipping>}
                    <StyledImage src={image}></StyledImage>
                </StyledImageAndShippingContainer>
                <StyledDescription>{title}</StyledDescription>
                <StyledSeparator>{`__`}</StyledSeparator>
                <StyledPrice>{`${currencyFormat} ${price}`}</StyledPrice>
                <StyledInstallments>{installment}</StyledInstallments>
                <AddToCart eachProduct={eachProduct}/>
            </StyledProductContainer>
        );
    }
}

export default Product;