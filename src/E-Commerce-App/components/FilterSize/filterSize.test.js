/*global expect*/
import React,{Component} from 'react';
import {render,fireEvent} from '@testing-library/react';
import {Provider} from 'mobx-react';
import stores from '../../../stores';
import SelectSize from '.';

describe("filterBySize test cases",() => {
    const product = {"availableSizes":["S","XS"],"currencyFormat":"â‚¹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"};
    it("sizes button", () => {
        const sizes = ['XS','S','M','L','XL','XXL'];
        const {queryByText} = render(<Provider {...stores}>(<SelectSize eachProduct={product}/></Provider>);
        sizes.forEach(eachSize => {
            expect(queryByText(eachSize)).toBeInTheDocument();
            fireEvent.click(queryByText(eachSize));
        });
    });
})