// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";

// class CounterChild1 extends React.Component {
//   render() {
//     console.log("render CounterChild1");

//     return <p>childCounter1: {this.props.childCounter1}</p>;
//   }
// }

// class CounterChild2 extends React.Component {
//   render() {
//     console.log("render CounterChild2");

//     return <p>childCounter2: {this.props.childCounter2}</p>;
//   }
// }

// @observer
// class CounterParent extends React.Component {
//   @observable childCounter1 = 2;
//   @observable childCounter2 = 123;

//   @action.bound
//   onUpdateCounterChild1() {
//     this.childCounter1 += 3;
//   }

//   @action.bound
//   onUpdateCounterChild2() {
//     this.childCounter2 -= 12;
//   }
//   @action.bound
//   onUpdate() {
//     this.onUpdateCounterChild1();
//     this.onUpdateCounterChild2();
//   }

//   render() {
//     console.log("render CounterParent");
//     return (
//       <div>
//         <CounterChild1 childCounter1={this.childCounter1} />
//         <CounterChild2 childCounter2={this.childCounter2} />
//         <button onClick={this.onUpdate}>Update count</button>
//       </div>
//     );
//   }
// }
// export default CounterParent;
// render(<CounterParent />, document.getElementById("root"));

// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";

// @observer
// class CounterChild1 extends React.Component {
//   render() {
//     console.log("render CounterChild1");

//     return <p>childCounter1: {this.props.childCounter1}</p>;
//   }
// }

// @observer
// class CounterChild2 extends React.Component {
//   render() {
//     console.log("render CounterChild2");

//     return <p>childCounter2: {this.props.childCounter2}</p>;
//   }
// }

// class CounterParent extends React.Component {
//   @observable childCounter1 = 301;
//   @observable childCounter2 = 12;

//   @action.bound
//   onUpdateCounterChild1() {
//     this.childCounter1 += 2;
//   }

//   @action.bound
//   onUpdateCounterChild2() {
//     this.childCounter2 -= 4;
//   }
//   @action.bound
//   onUpdate() {
//     this.onUpdateCounterChild1();
//     this.onUpdateCounterChild2();
//   }

//   render() {
//     console.log("render CounterParent");
//     return (
//       <div>
//         <CounterChild1 childCounter1={this.childCounter1} />
//         <CounterChild2 childCounter2={this.childCounter2} />
//         <button onClick={this.onUpdate}>Update count</button>
//       </div>
//     );
//   }
// }

// export default CounterParent;


// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class Counter extends Component {
//   @observable count = 0;
//   @observable doubleTheCount = 10;
//   @observable tripleTheCount = 20;

//   @action.bound
//   async updateCounts() {
//     let promise = new Promise((resolve, reject) => {
//       resolve("Success");
//     });
//     await promise;
//     this.updateCountsSynchronously();
//   }

//     @action.bound
//     updateCountsSynchronously(){
//     this.count = this.count + 1;
//     this.doubleTheCount = this.doubleTheCount * 2;
//     this.tripleTheCount = this.tripleTheCount * 3;
//   };

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <p>Double Count: {this.doubleTheCount}</p>
//         <p>Triple Count: {this.tripleTheCount}</p>
//         <button onClick={this.updateCounts}>Update counts</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// import { observable, computed, reaction } from "mobx";

// class Product {
//   @observable price = 0;
//   @observable tax = 0;

//   setPriceAndTax = () => {
//     this.price = 40;
//     this.tax = 4;
//   };

//   @computed
//   get total() {
//     return this.price + this.tax;
//   }
// }

// const product = new Product();

// reaction(
//   () => product.total,
//   () => {
//     console.log("reaction called");
//   }
// );

// product.setPriceAndTax();

import React, { Component } from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  @observable count = 12;
  @observable doubleTheCount = 13;

  @action.bound
  async updateCounts() {
    this.count = this.count + 1;

    let promise = new Promise((resolve, reject) => {
      resolve("Success");
    });
    promise.then(() => {
      this.count = this.count + 1;
      this.doubleTheCount = this.doubleTheCount * 2;
    });
  }

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.count}</p>
        <p>Double Count: {this.doubleTheCount}</p>
        <button onClick={this.updateCounts}>Update counts</button>
      </div>
    );
  }
}

export default Counter;

