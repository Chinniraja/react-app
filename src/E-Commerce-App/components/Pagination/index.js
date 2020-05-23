import React,{Component} from 'react';
import {inject,observer} from 'mobx-react';
import {StyledPaginationContainer,StyledPreviousPage,StyledPageContainer,StyledCurrentPage,StyledNextPage,StyledTotalPages} from './styledComponents';

@inject('productStore')
@observer
class Pagination extends Component {
    goToPreviousPage = () => {
        const {productStore:{previousPage,getProduct,pageNumber}} = this.props;
        if(pageNumber>1){
            previousPage();
            getProduct();
        }
    }
    
    goToNextPage = () => {
        const {productStore:{nextPage,getProduct,pageNumber,productsCount,limit}} = this.props;
        const totalPages = Math.ceil(productsCount / limit);
        if(pageNumber<totalPages) {
            nextPage();
            getProduct();
        }
    }
    
    render() {
        const {productStore:{pageNumber,productsCount,limit}} = this.props;
        const totalPages = Math.ceil(productsCount / limit);
        return (
            <StyledPaginationContainer>
                <StyledPreviousPage disabled={pageNumber === 1 ? true : false} onClick={this.goToPreviousPage}>{`<`}
                </StyledPreviousPage>
                <StyledPageContainer>
                    <StyledCurrentPage>{pageNumber}</StyledCurrentPage>
                    /
                    <StyledTotalPages>{totalPages}</StyledTotalPages>
                </StyledPageContainer>
                <StyledNextPage disabled={pageNumber === totalPages ? true : false} onClick={this.goToNextPage}>
                {`>`}
                </StyledNextPage>
            </StyledPaginationContainer>
        );
    }
}

export {Pagination};