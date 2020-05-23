import {observable,action,computed} from 'mobx';
import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import ProductModel from '../Model/ProductModel/index';

class ProductStore {
    @observable productsList
    @observable selectedSize
    @observable sortByPrize
    @observable searchText
    @observable getProductAPIStatus
    @observable getProductAPIError
    @observable pageNumber
    @observable productsCount
    @observable offset
    limit
    productAPIService
    
    
    constructor(productAPIService){
        this.productAPIService = productAPIService;
        this.init();
    }
    
    @action.bound
    init(){
        this.productsList = [];
        this.selectedSize = [];
        this.sortByPrize = '';
        this.searchText = '';
        this.pageNumber = 1;
        this.productsCount = 0;
        this.offset = 0;
        this.limit = 3;
        this.getProductAPIStatus = API_FETCHING;
    }
    
    
    @action.bound
    getProduct(offset){
        const productsPromise = this.productAPIService.getProducts(this.limit,this.offset);
        return bindPromiseWithOnSuccess(productsPromise)
        .to(this.setProductAPIStatus,this.setProductAPIResponse)
        .catch(this.setProductAPIError);
    }
    
    @action.bound
    filterBySize(eventId){
        const index = this.selectedSize.indexOf(eventId);
        if(index === -1){
            this.selectedSize.push(eventId);
        }
        else{
            this.selectedSize.splice(index,1);
        }
    }
    
    @action.bound
    previousPage() {
        --this.pageNumber;
        this.offset -= this.limit;
    }
    
    @action.bound
    nextPage() {
        ++this.pageNumber;
        this.offset += this.limit;
    }
    
    @action.bound
    sortByPrice(value){
        this.sortByPrize = value;
    }
    
    @action.bound
    onChangeSearchText(value){
        this.searchText = value.toLowerCase();
    }
    
    @action.bound
    setProductAPIResponse(apiResponse){
        apiResponse.products.map(eachProduct => new ProductModel(eachProduct));
        this.productsList = apiResponse.products;
        this.productsCount = apiResponse.total;
    }
    
    @action.bound
    setProductAPIStatus(apiStatus){
        this.getProductAPIStatus = apiStatus;
    }
    
    @action.bound
    setProductAPIError(apiError){
        this.getProductAPIError = apiError;
        console.log("asdf",apiError);
    }
    
    @action.bound
    clearStore(){
        this.init();
    }
    
    @computed get filterListBySizeAndPrice(){
        let isAvailable = false,filteredList;
        if(this.selectedSize.length){
            filteredList = this.productsList.filter((eachProduct) => {
                eachProduct.availableSizes.forEach((eachSize) => {
                    if(this.selectedSize.indexOf(eachSize) !== -1){
                        isAvailable = true;
                    }
                });
                const availableProduct = isAvailable;
                isAvailable = false;
                return availableProduct ? {eachProduct} : null;
            });
        }
        else{
            filteredList = this.productsList;
        }
        if(this.sortByPrize === "DESCENDING"){
            filteredList = filteredList.slice().sort((a, b) => (a.price < b.price));
        }
        else if(this.sortByPrize === "ASCENDING"){
            filteredList = filteredList.slice().sort((a, b) => (a.price > b.price));
        }
        filteredList = filteredList.filter(eachProduct => eachProduct.title.toLowerCase().match(this.searchText));
        return filteredList;
    }
    
    // @computed get productsCount(){
    //     return this.totalProducts;
    // }
}

export default ProductStore;