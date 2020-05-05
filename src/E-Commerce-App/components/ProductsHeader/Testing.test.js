/*global expect*/
import React,{Component} from 'react';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import ProductStore from '../../stores/ProductStore';

describe("ProductStore tests",() => {
    let productAPIService = new ProductAPIService();
    let productStore = new ProductStore(productAPIService);
        
    it("get products from productAPIService",() => {
        productStore.getProduct();
        expect(productStore.productsCount).toBe(0);
    });
});