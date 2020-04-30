import {observable,action,computed} from 'mobx';
import {API_INITIAL,API_SUCCESS,API_ERROR} from '@ib/api-constants';
import ItemModel from '../Model/ItemModel/index';

class cartStore {
    @observable cartList
    @observable quantity
    
    constructor(){
        this.init();
    }
    
    @action.bound
    init(){
        this.cartList = [];
        this.quantity = 0;
    }
    
    @action.bound
    addToCart(item){
        const value = this.cartList.find(eachItem => eachItem.id === item.id);
        if(value === undefined){
            item.quantity = 1;
            const itemModel = new ItemModel(item);
            this.cartList.push(itemModel);
        }
        else {
            value.quantity += 1;
        }
        this.quantity=this.productsCount;
    }
    
    @action.bound
    onDeleteItem(item){
        const index = this.cartList.indexOf(item);
        this.cartList.splice(index,1);
        this.quantity = this.productsCount;
    }
    
    
    @action.bound
    clearStore(){
        this.init();
    }
    
    @action.bound 
    onCheckout(){
        this.init();
        alert(
            `Thank you for shopping with us 😊.
            Your products will be delivered in 3 days to the address mentioned in your profile.`
        );
    }
    
    
    @computed get productsCount(){
        const productsCount = this.cartList.reduce((productsCount,eachItem) => productsCount + eachItem.quantity,0);
        return productsCount;
    }
    
    @computed get totalPrice() {
        const totalPrice = this.cartList.reduce((totalPrice,eachItem) => totalPrice + (eachItem.quantity * eachItem.price),0);
        return totalPrice.toFixed(2);
    }
}

export default cartStore;