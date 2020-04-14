import React from 'react';
import {observer} from 'mobx-react';
// import {configure} from 'mobx';

import counterStateStore from '../../stores/Store/CounterStateStore/';
import {StyledCounterContainer,Button,Input,Header,Counter} from './styledComponent';


// configure({ enforceActions: true});

@observer
class CounterApp extends React.Component{
    onChange = (event) => {
        const {onChange} = counterStateStore;
        onChange(event.target.value);
    }
    
    onIncreament = () => {
        const {onIncreament} = counterStateStore;
        onIncreament();
    }
    
    onDecreament = () => {
        const {onDecreament} = counterStateStore;
        onDecreament();
    }
    
    getValue = () => {
        return counterStateStore.counter;
    }
    
    render(){
        return (
            <StyledCounterContainer>
                <Header>Counter</Header>
                <Counter>
                    <Button onClick={this.onIncreament}>+</Button>
                    <Input value={this.getValue()} onChange={this.onChange}></Input>
                    <Button onClick={this.onDecreament}>-</Button>
                </Counter>
            </StyledCounterContainer>
        );
    }
}

export default CounterApp;