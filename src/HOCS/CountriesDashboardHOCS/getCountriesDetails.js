/*global fetch*/
import React from 'react';

const withCountries = function(WrappedComponent) {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state={countries:[]};
        }
        
        async componentDidMount() {
            const data = await fetch('https://restcountries.eu/rest/v2/all');
            const jsonData = await data.json();
            this.setState({countries:jsonData});
        }
        
        render() {
            const {state:{countries}} = this;
            return (
                <div>
                    <WrappedComponent {...this.props} countries={countries} ></WrappedComponent>
                </div>
            );
        }
    };
};

export default withCountries;