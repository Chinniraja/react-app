import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import {StyledSelectSizeContainer,StyledSize,StyledText,StyledSizes}  from './styledComponents';

@inject("productStore")
@observer
class SelectSize extends Component{
    @observable sizes = [{size:'XS',isSelected:false},{size:'S',isSelected:false},{size:'M',isSelected:false},{size:'L',isSelected:false},{size:'XL',isSelected:false},{size:'XXL',isSelected:false}]
    
    onSizeSelect = (event) => {
        const {productStore:{filterBySize}} = this.props;
        const selectedSize = this.sizes.find(eachSize => eachSize.size === event.target.id);
        selectedSize.isSelected = !selectedSize.isSelected;
        filterBySize(event);
    }
    
    render() {
        return (
            <StyledSelectSizeContainer>
                <StyledText>{`Sizes:`}</StyledText>
                <StyledSizes>
                {
                    this.sizes.map((eachSize) => {
                        return <StyledSize onClick={this.onSizeSelect} key={eachSize.size} id={eachSize.size} isSelected={eachSize.isSelected}>{eachSize.size}</StyledSize>;
                    })
                }
                </StyledSizes>
            </StyledSelectSizeContainer>
        );
    }
}

export default SelectSize;