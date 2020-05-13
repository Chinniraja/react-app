/*global expect*/
import React,{Component} from 'react';
import {render,fireEvent} from '@testing-library/react';
import {Provider} from 'mobx-react';
import stores from '../../../stores';
import CartList from '.';

describe("carlist test cases",() => {
    const cartitem = {"availableSizes":["S","XS"],"currencyFormat":"â‚¹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"};
    const {onDeleteItem} = stores.cartStore;
    it("should map eachItem in the list", () => {
        stores.cartStore.addToCart(cartitem);
        const {getByText} = render(<Provider {...stores}><CartList onDeleteItem={onDeleteItem}/></Provider>);
        expect(stores.cartStore.productsCount).toBe(1);
    });
})