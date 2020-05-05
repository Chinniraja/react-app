import getProductsResponse from '../../fixtures/getUsersResponse.json';

class ProductFixtureService {
    getUsers(){
        return new Promise((resolve,reject) => {
            resolve(getProductsResponse);
        });
    }
}

export default ProductFixtureService;