import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import {StyledHeaderContainer,StyledSearchBar,StyledProductsCount,StyledSizeDropDown,StyledText,StyledSortByPricesContainer} from './styledComponents';

@inject("productStore")
@observer
class Header extends Component{
    @observable searchText = ''
    
    onChangePrice = (event) => {
        const {productStore:{sortByPrice}} = this.props;
        sortByPrice(event);
    }
    
    onChangeSearchText = (event) => {
        const {productStore:{onChangeSearchText}} = this.props;
        this.searchText = event.target.value;
        onChangeSearchText(event.target.value);
    }
    
    render(){
        const {productStore:{productsCount}} = this.props;
        return (
            <StyledHeaderContainer>
                <StyledProductsCount>{`${productsCount} Product(s) found`}</StyledProductsCount>
                <StyledSearchBar placeholder="Search products" onChange={this.onChangeSearchText} value={this.searchText}/>
                <StyledSortByPricesContainer>
                    <StyledText>{`Sort price by:`}</StyledText>
                    <StyledSizeDropDown onChange={this.onChangePrice}>
                        <option defaultValue="Select">{`Select`}</option>
                        <option value="ASCENDING">{`Lowest to Highest`}</option>
                        <option value="DESCENDING">{`Highest to Lowest`}</option>
                    </StyledSizeDropDown>
                </StyledSortByPricesContainer>
            </StyledHeaderContainer>
        );
    }
}

export default Header;