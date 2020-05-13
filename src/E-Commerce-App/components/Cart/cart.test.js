/*global expect*/
import React,{Component} from 'react';
import {render,fireEvent} from '@testing-library/react';
import {Provider} from 'mobx-react';
import stores from '../../../stores';
import Cart from './index';


describe("Cart tests",() => {
    it("cart open",() => {
        const {getByTestId} = render(<Provider {...stores}><Cart/></Provider>);
        expect(getByTestId("cart-open-button")).toBeInTheDocument();
        fireEvent.click(getByTestId("cart-open-button"));
        expect(getByTestId("cart-close-button")).toBeInTheDocument();
        fireEvent.click(getByTestId("cart-close-button"));
        expect(getByTestId("cart-open-button")).toBeInTheDocument();
    });
    
    it("",() => {
        const productsCount = stores.cartStore.productsCount;
        expect(productsCount).toBe(0);
    });
});