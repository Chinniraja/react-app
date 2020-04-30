import React,{Component} from 'react';
import {observer} from 'mobx-react';

@observer
class ProductModel extends Component{
    constructor(props){
        super(props);
        this.quantity = this.props.quantity;
        this.availableSizes = this.props.availableSizes;
        this.currencyFormat = this.props.currencyFormat;
        this.currencyId = this.props.currencyId;
        this.description = this.props.description;
        this.id = this.props.id;
        this.installments = this.props.installments;
        this.isFreeShipping = this.props.isFreeShipping;
        this.price = this.props.price;
        this.sku = this.props.sku;
        this.style = this.props.style;
        this.title = this.props.title;
        this.image = this.props.image;
    }
}

export default ProductModel;