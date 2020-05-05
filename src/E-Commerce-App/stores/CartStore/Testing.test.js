/*global expect*/
import React,{Component} from 'react';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import CartStore from '.';

describe("ProductStore tests",() => {
    let productAPIService;
    let cartStore = new CartStore();
    
    it("get products from productAPIService",() => {
        const mockCart = jest.fn();
        // mockCart.mockReturnValue(mockSuccessPromise);
        cartStore.quantity = mockCart;
        
        cartStore.addToCart({id:1});
        expect(cartStore.quantity).toBe(1);
    });
});