import React,{Component} from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class ItemModel extends Component{
    @observable quantity = 0
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
        this.quantity = this.props.quantity;
    }
    
    @action.bound
    onIncrementQuantity(){
        ++this.quantity;
    }
}

export default ItemModel;