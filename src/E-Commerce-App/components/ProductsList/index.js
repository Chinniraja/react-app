import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import Product from '../Product/index';
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure/index';
import NoDataView from '../../common/NoDataView';
import {StyledProductsListContainer} from './styledComponents';

@inject("productStore")
@observer
class ProductsList extends Component {
    @observable filteredList = []
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    doNetworkCalls = () => {
        const {productStore:{getProduct}} = this.props;
        getProduct();
    }
    
    renderProductsList = observer(() => {
        const {productStore:{filterListBySizeAndPrice}} = this.props;
        const filteredList = filterListBySizeAndPrice;
        if(filteredList.length){
            return (
                <StyledProductsListContainer>
                    {
                        filteredList.map((eachProduct) => {
                            return <Product key={eachProduct.id} id={eachProduct.id} eachProduct={eachProduct}/>;
                        })
                    }
                </StyledProductsListContainer>    
            );
        }
        return (
            <StyledProductsListContainer>
                <NoDataView/>
            </StyledProductsListContainer>
        );
    })
    
    render() {
        const {productStore:{getProductAPIStatus,getProductAPIError}} = this.props;
        return (
            <LoadingWrapperWithFailure
                apiStatus={getProductAPIStatus}
                apiError={getProductAPIError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderProductsList}
            />
        );
    }
}

export default ProductsList;