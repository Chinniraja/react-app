/*global expect jest*/
import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import {Provider} from 'mobx-react';
import stores from '../../../stores';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import ProductStore from '../../stores/ProductStore';
import Header from '.';

describe("productHeader testing",() => {
    let productAPIService = new ProductAPIService();
    let productStore = new ProductStore(productAPIService);
    beforeEach(async () => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductsResponse);
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productAPIService.getProducts = mockProductAPI;
        await productStore.getProduct();
    });
    it('should print products count',async () => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductsResponse);
        });
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productAPIService.getProducts = mockProductAPI;
        await productStore.getProduct();
        
        const {getByText} = render(<Provider {...stores}><Header productStore={productStore}/></Provider>);
        expect(getByText(`${productStore.productsCount} Product(s) found`)).toBeInTheDocument();
    });
    
    it("onChange text and price",async () => {
        // const mockSuccessPromise = new Promise(function(resolve, reject) {
        //     resolve(getProductsResponse);
        // });
        // const mockProductAPI = jest.fn();
        // mockProductAPI.mockReturnValue(mockSuccessPromise);
        // productAPIService.getProducts = mockProductAPI;
        // await productStore.getProduct();
        const {getByText} = render(<Provider {...stores}><Header productStore={productStore} onChangeSearchText ={ (event) => {}}/></Provider>);
        expect(getByText(`${productStore.productsCount} Product(s) found`)).toBeInTheDocument();
    });
})