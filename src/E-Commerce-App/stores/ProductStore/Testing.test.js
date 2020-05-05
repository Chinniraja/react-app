/*global expect*/
import React,{Component} from 'react';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import ProductStore from '.';

describe("ProductStore tests",() => {
    let productAPIService;
    let productStore;
    
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
        productAPIService = new ProductAPIService();
        productStore = new ProductStore(productAPIService);
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductsResponse);
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productAPIService.getProducts = mockProductAPI;
        
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
});