/*global expect*/
import React,{Component} from 'react';
import {Provider} from 'mobx-react';
import {render,fireEvent} from '@testing-library/react';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductAPIService from "../../services/ProductService/index.api";
import ProductStore from '../../stores/ProductStore';
import Cart from '../Cart';
import stores from '../../../stores';

describe("ProductStore tests",() => {
    it("get products from productAPIService",() => {
        const {getByTestId} = render(<Provider {...stores}><Cart/></Provider>);
        expect(getByTestId("cart-open-button")).toBeInTheDocument();
        fireEvent.click(getByTestId("cart-open-button"));
        expect(getByTestId("cart-close-button")).toBeInTheDocument();
        fireEvent.click(getByTestId("cart-close-button"));
        expect(getByTestId("cart-open-button")).toBeInTheDocument();
    });
});