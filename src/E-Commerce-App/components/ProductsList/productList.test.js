/*global expect jest*/
import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'mobx-react';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import ProductStore from '../../stores/ProductStore';
import stores from '../../../stores';
import ProductsList from '.';

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
    
    it("render products list",() => {
        const apiStatus = productStore.getProductAPIStatus;
        render(<Provider {...stores}><ProductsList getProductAPIStatus={apiStatus}/></Provider>);
        expect(productStore.filterListBySizeAndPrice).toStrictEqual(productStore.productsList);
    });
})