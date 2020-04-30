import React,{Component} from 'react';

class HelloMessage extends Component {
    render() {
        return (
            <div>{this.props.message}</div>    
        );
    }
}

export {HelloMessage};