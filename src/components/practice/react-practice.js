import React from 'react';

class ParentCounter extends React.Component {
    state = {
        ParentCounter:0
    }
    
    onParentCounterIncreament = () => {
        this.setState({ParentCounter:this.state.ParentCounter + 1});
    }
    
    render() {
        console.log("ParentCounter Render called");
        return (
            <ChildCounter
                onParentCounterIncreament={this.onParentCounterIncreament}
                ParentCounter={this.state.ParentCounter}
            />
        );
    }
}

class ChildCounter extends React.Component {
    state = {
        ChildCounter1:0,
        ChildCounter2:0
    }
    
    onIncreament = () => {
        this.props.onParentCounterIncreament();
        this.props.onParentCounterIncreament();
        this.setState({ChildCounter1:this.state.ChildCounter1 + 1});
        this.setState({ChildCounter1:this.state.ChildCounter1 + 1});
        this.setState({ChildCounter1:this.state.ChildCounter1 + 1});
        this.setState({ChildCounter1:this.state.ChildCounter1 + 1});
    }
    
    render() {
        console.log("ChildCounter Render called");
        return (
            <div className="parent-counter">
                <button className="increase-count-btn" onClick={this.onIncreament}>Increase Count</button>
                <p className="count">{this.state.ChildCounter1}</p>
            </div>
        ); 
    }
}





export {ParentCounter};