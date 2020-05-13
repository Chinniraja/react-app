/*global expect*/
import React,{Component} from 'react';
import {render,fireEvent} from '@testing-library/react';
import {Provider} from 'mobx-react';
import CartStore from '../../stores/CartStore';

import stores from '../../../stores';
import CartItem from '.';

describe("carlist test cases",() => {
    let cartStore = new CartStore();
    const cartitem = {"availableSizes":["S","XS"],"currencyFormat":"â‚¹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"};
    cartStore.addToCart(cartitem);
it("should delete item the list", () => {
        const {getByTestId} = render(<Provider cartStore={cartStore}><CartItem eachItem={cartStore.cartList[0]} /></Provider>);
        fireEvent.click(getByTestId("remove-cart-item"));
        expect(cartStore.productsCount).toBe(0);
    });
})