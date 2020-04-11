import React from 'react';
import {Provider,inject,observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class A extends React.Component{
    render(){
        return (
            <Provider temp={"value"}>
                <B/>
            </Provider>
        );
    }
}

@inject("temp")
@observer
class B extends React.Component{
    @observable name=""
    
    onChange = (event) => {
        this.name = event.target.value;
    }
    
    render(){
        const {temp} = this.props;
        console.log("B",temp);
        return (
            <div>
                <input style={{backgroundColor:"green"}} value={this.name} onChange={this.onChange}/>
                <C name={this.name}/>
            </div>
        );
    }
}

@inject("temp")
class C extends React.Component{
    render(){
        const {name} = this.props;
        console.log("C",name);
        return (
            <div style={{border:"1px solid black",margin:"10px",textAlign:"center"}}>{name}</div>
        );
    }
}

export default A;