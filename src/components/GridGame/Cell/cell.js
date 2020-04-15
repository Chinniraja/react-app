import React from 'react';
import {StyledCell,StyledCellColor} from './styledComponent';

class Cell extends React.Component{
    
    isCellClicked = () => {
        console.log(this.props.value);
    }
    
    render(){
        return (
            <StyledCell onClick={this.isCellClicked} isHidden={this.props.isHidden}>
                <StyledCellColor isHidden={this.props.isHidden}>
                    {this.props.value}
                </StyledCellColor>
            </StyledCell>
        );
    }
}

export default Cell;