import React, { Component } from 'react';
import { observer} from 'mobx-react';

import counterStore from '../../stores/CounterStore/index';


@observer
class CounterPage extends Component {
  handleIncrement = () => {
    counterStore.incrementCounter();
  }

  handleDecrement = () => {
    const {count} = counterStore;
    if (count !== 0) {
      counterStore.decrementCounter();
    }
  }

  render() {
    return (
      <div>
        <h1>{counterStore.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default CounterPage;
