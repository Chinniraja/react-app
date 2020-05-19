import React,{Component} from 'react';
import DisplayMouseCoordinates from '../DisplayMouseCoordinates';
import {RenderPropsContainer} from './styledComponents';


class MouseCoordinates extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
          x: event.clientX,
          y: event.clientY
        });
    }
    
    render() {
        const {x,y} = this.state;
        return (
            <RenderPropsContainer onMouseMove={this.handleMouseMove}>
                <DisplayMouseCoordinates x={x} y={y}/>
            </RenderPropsContainer>
        );
    }
}

export default MouseCoordinates;