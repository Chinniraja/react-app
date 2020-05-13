/*global expect*/
import React,{Component} from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'mobx-react';
import stores from '../../../stores';
import Product from '.';


describe("Product tests",() => {
    const eachProduct = [{"availableSizes":["S","XS"],"currencyFormat":"â‚¹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"},
        {"availableSizes":["XL","XXL"],"currencyFormat":"â‚¹","currencyId":"USD","description":"Goleiro 13/14","id":6,"installments":0,"isFreeShipping":true,"price":3841.99,"sku":6090484789343891,"style":"Branco","title":"Crazy Monkey Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg"},];
    it("check installments",() => {
        const {price,installments,currencyFormat} = eachProduct[0];
        const {getByText} = render(<Provider {...stores}><Product eachProduct={eachProduct[0]}/></Provider>);
        const installmentAmount = price/installments;
        const installment = installments ?  `or ${installments} x ${currencyFormat} ${installmentAmount.toFixed(2)}` : 'No Installments';
        expect(getByText(installment)).toBeInTheDocument();
    });
    
    it("check no installments",() => {
        const {price,installments,currencyFormat} = eachProduct[1];
        const {getByText} = render(<Provider {...stores}><Product eachProduct={eachProduct[1]}/></Provider>);
        const installmentAmount = price/installments;
        const installment = installments ?  `or ${installments} x ${currencyFormat} ${installmentAmount.toFixed(2)}` : 'No Installments';
        expect(getByText(installment)).toBeInTheDocument();
    });
});