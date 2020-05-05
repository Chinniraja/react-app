/*global expect jest*/
import React from 'react';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import ProductStore from '../../stores/ProductStore';

describe("product list testing",() => {
    let productAPIService = new ProductAPIService();
    let productStore = new ProductStore(productAPIService);
        
    it('should print products count',async () => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductsResponse);
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productAPIService.getProducts = mockProductAPI;
        
        await productStore.getProduct();
        expect(productStore.productsCount).toBe(16);
    });
})