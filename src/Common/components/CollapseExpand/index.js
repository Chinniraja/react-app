import React,{Component} from 'react';
import withToggle from '../../hocs/withToggle'; 
import {CollapseExpandContainer,StyledLabel,StyledEditBtn,StyledTitle,StyledContainer,Item,StyledListContainer,StyledButtonAndListWrapper} from './styledComponents';

class CollapseExpand extends Component {
    
    renderList = () => {
        const {list} = this.props;
        return list.map(eachItem => {
            return <Item key={eachItem}>{eachItem}</Item>;
        });
    }
    
    render() {
        const {onToggle,toggleStatus,listTitle} = this.props;
        return (
            <CollapseExpandContainer>
                <StyledTitle>{`CollapseExpand`}</StyledTitle>
                <StyledContainer>
                    <StyledLabel>{listTitle}</StyledLabel>
                    <StyledButtonAndListWrapper>
                        <StyledEditBtn onClick={onToggle}>{!toggleStatus ? 'Expand' : 'Collapse'}</StyledEditBtn>
                        <StyledListContainer>
                            {toggleStatus && this.renderList() }
                        </StyledListContainer>
                    </StyledButtonAndListWrapper>
                </StyledContainer>
            </CollapseExpandContainer>
        );
    }
}

export default withToggle(CollapseExpand);