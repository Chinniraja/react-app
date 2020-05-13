/*global expect*/
import React,{Component} from 'react';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import CartStore from '.';

describe("cartStore tests",() => {
    let productAPIService;
    let cartStore = new CartStore();
    const productObject = {"availableSizes":["S","XS"],"currencyFormat":"â‚¹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"};
    const price = Number(productObject.price);
    
    it("should print productsCount",() => {
        expect(cartStore.productsCount).toBe(0);
    });
    
    it("should print productsCount",() => {
        const price = Number(cartStore.totalPrice);
        expect(price).toBe(0);
    });
    
    it("get products from productAPIService",() => {
        const mockCart = jest.fn();
        cartStore.quantity = mockCart;
        cartStore.addToCart(productObject);
        expect(cartStore.quantity).toBe(1);
    });
    
    it("should print productsCount and price",() => {
        expect(cartStore.cartList[0].price).toBe(price);
        expect(cartStore.cartList.length).toBe(cartStore.productsCount);
    });
    
    it("should delete the item in the cartlist",() => {
        cartStore.onDeleteItem(productObject);
        expect(cartStore.productsCount).toBe(0);
    });
    
    it("should clear the store onCheckout",() => {
        cartStore.onCheckout();
        expect(cartStore.cartList.length).toBe(0);
        expect(cartStore.quantity).toBe(0);
    });
    
    it("subtotal ",() => {
        const mockCart = jest.fn();
        cartStore.quantity = mockCart;
        cartStore.addToCart(productObject);
        expect(Number(cartStore.totalPrice)).toBe(price);
    });
    
    it("quantity",() => {
        const mockCart = jest.fn();
        cartStore.quantity = mockCart;
        cartStore.onDeleteItem(productObject);
        cartStore.addToCart(productObject);
        cartStore.addToCart(productObject);
        expect(cartStore.cartList[0].quantity).toBe(2);
    });
});