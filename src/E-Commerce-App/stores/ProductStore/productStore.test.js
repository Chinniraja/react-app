/*global expect*/
import React,{Component} from 'react';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import ProductStore from '.';

describe("ProductStore tests",() => {
    let productAPIService;
    let productStore;
    beforeEach(() => {
        productAPIService = new ProductAPIService();
        productStore = new ProductStore(productAPIService);
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductsResponse);
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productAPIService.getProducts = mockProductAPI;
        productStore.getProduct();
    });
    it("should print undefined",() => {
        expect(ProductStore.sortByPrize).toBeUndefined();
    });
    
    it("should print fetchinng",() => {
        expect(ProductStore.getProductAPIStatus).toBeUndefined();
    });
    
    it("should be empty array",() => {
        expect(ProductStore.productsList).toBeUndefined();
    });
    
    it("selectedSize should be empty",() => {
        expect(ProductStore.selectedSize).toBeUndefined();
    });
    
    it("get products from productAPIService",() => {
    productStore.getProduct();
        expect(productStore.getProductAPIStatus).toBe(API_FETCHING);
    });
    
    it("getProductAPIStatus should be 200",() => {
        expect(productStore.getProductAPIStatus).toBe(API_SUCCESS);
    });
    
    it("getProductAPIResponse should be array of objects",() => {
        expect(productStore.productsList.length > 0).toBe(true);
        expect(productStore.getProductAPIError).toBeUndefined();
    });
    
    it("selected size",() => {
        productStore.onChangeSearchText("hgj");
        const products = productStore.filterListBySizeAndPrice;
        expect(products.length).toBe(0);
    });
    
    it("filterBySize",() => {
        const eventId = "XS";
        productStore.filterBySize(eventId);
        const products = productStore.filterListBySizeAndPrice;
        expect(products.length).toBe(2);
        productStore.filterBySize(eventId);
        expect(productStore.filterListBySizeAndPrice.length).toBe(16);
    });
    
    it("sortByPrize",() => {
        let testProducts = [{"availableSizes":["S","XS"],"currencyFormat":"â‚¹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"},
        {"availableSizes":["XS","L"],"currencyFormat":"â‚¹","currencyId":"USD","description":"14/15 s/nÂº","id":2,"installments":7,"isFreeShipping":true,"price":1147,"sku":11854078013954528,"style":"Branco com listras pretas","title":"Danger Knife Grey","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg"}];
        const value= "ASCENDING";
        const eventId = "XS";
        productStore.filterBySize(eventId);
        productStore.sortByPrice(value);
        const products = productStore.filterListBySizeAndPrice;
        testProducts = testProducts.slice().sort((a, b) => (a.price > b.price));
        expect(products).toStrictEqual(testProducts);
        productStore.filterBySize(eventId);
        productStore.filterBySize(eventId);
        productStore.sortByPrice("DESCENDING");
        const products1 = productStore.filterListBySizeAndPrice;
        testProducts = testProducts.slice().sort((a, b) => (a.price < b.price));
        expect(products1).toEqual(testProducts);
    });
    
    it("data fetch failure",async () => {
        productAPIService = new ProductAPIService();
        productStore = new ProductStore(productAPIService);
        const mockSuccessPromise =  new Promise(function(resolve, reject) {
            reject(400);
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productAPIService.getProduct = mockProductAPI;
        productStore.getProduct(mockSuccessPromise);
        // productStore.setProductAPIError();
        // expect(productStore.getProductAPIError).toBe(400);
    });
});