import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {StyledFooterSection,StyledSubTotal,StyledCheckoutButton,StyledTitle,StyledAmount} from './styledComponents';

@inject("cartStore")
@observer
class CarFooter extends Component {
    render() {
        const {cartStore:{onCheckout,totalPrice,productsCount}} = this.props;
        const subTotal = totalPrice;
        const disabled = productsCount ? false : true;
        return (
            <StyledFooterSection>
                <StyledSubTotal>
                    <StyledTitle>{`SUBTOTAL`}</StyledTitle>
                    <StyledAmount>{`₹ ${subTotal}`}</StyledAmount>
                </StyledSubTotal>
                <StyledCheckoutButton onClick={onCheckout} disabled={disabled}>{`CHECKOUT`}</StyledCheckoutButton>
            </StyledFooterSection>
        );
    }
}

export default CarFooter;