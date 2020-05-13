/*global expect*/
import React,{Component} from 'react';
import {render,fireEvent} from '@testing-library/react';
import {Provider} from 'mobx-react';
import stores from '../../../stores';
import EcommerceDashboard from '.';


describe("ecommerceDashboard tests",() => {
    it("cart open",() => {
        const {getByText} = render(<Provider {...stores}><EcommerceDashboard/></Provider>);
        expect(getByText("Sign Out")).toBeInTheDocument();
        fireEvent.click(getByText("Sign Out"));
        expect(stores.authStore.access_token).toBe(undefined);
    });
});