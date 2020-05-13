import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import CartItem from '../CartItem/index';
import {StyledCartListContainer,StyledContent} from './styledComponents';

@inject("cartStore")
@observer
class CartList extends Component{
    render() {
        const {cartStore:{cartList},onDeleteItem} = this.props;
        return (
            <StyledCartListContainer>
                {
                    cartList.length > 0 ? cartList.map((eachItem) => {
                        return <CartItem key={eachItem.id} eachItem={eachItem} onDeleteItem={onDeleteItem}/>;
                    }):
                    <StyledContent>
                    {`Add some products in the cart`}
                    </StyledContent>
                }
            </StyledCartListContainer>
        );
    }
}

export default CartList;