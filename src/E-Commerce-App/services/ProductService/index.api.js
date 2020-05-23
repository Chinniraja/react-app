import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';

class ProductAPIService {
    api 
    constructor(){
        this.api = create({   
            baseURL:`https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/`
        });
    }
    
    getProducts = (limit,count) => {
        return networkCallWithApisauce(this.api,`products?limit=${limit}&offset=${count}`,{},apiMethods.get);
    }
}

export default ProductAPIService;



// https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/