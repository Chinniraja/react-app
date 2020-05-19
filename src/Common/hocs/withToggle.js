import React,{Component} from 'react';
import{observable} from 'mobx';
import {observer} from 'mobx-react';


const withToggle = function(WrappedCompoent){
    return class extends Component {
            constructor(props) {
                super(props);
                this.state={toggleStatus:false};
            }
        
            onToggle = () => {
                this.setState({toggleStatus: !this.state.toggleStatus});
            }
            
            render() {
                const {toggleStatus} = this.state;
                return (
                    <WrappedCompoent {...this.props} onToggle={this.onToggle} toggleStatus={toggleStatus}/>
                );
            }
    };
};

export default withToggle;