import React,{Component} from 'react';
import withToggle from '../../hocs/withToggle'; 
import {DisplayMouseCoordinatesContainer,StyledCoordinatesText,StyledTitle} from './styledComponents';

class DisplayMouseCoordinates extends Component {
    
    render() {
        const {x,y} = this.props;
        return (
            <DisplayMouseCoordinatesContainer>
                <StyledTitle>{`DisplayMouseCoordinates`}</StyledTitle>
                <StyledCoordinatesText>{`The mouse position is (${x}, ${y})`}</StyledCoordinatesText>
            </DisplayMouseCoordinatesContainer>
        );
    }
}

export default DisplayMouseCoordinates;