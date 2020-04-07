import React from 'react';
import CountryCard from '../CountryCard/countryCard.js';
import shallowEqual from '../../../../node_modules/@babel/types/lib/utils/shallowEqual.js';
import {CountriesContainer,DataNotFound} from './styledComponent.js';

class RenderCountries extends React.Component{
    
    shouldComponentUpdate(nextProps,nextState){
        return !shallowEqual(this.props,nextProps);
    }
    
    
    renderCountries = (props) => {
        const {color,isCountrySelected,selectedCountries} = this.props;
        const updatedCountriesList = selectedCountries.map(eachCountry => {
            return (
                <CountryCard color={color} key={eachCountry.name} eachCountry={eachCountry} isCountrySelected={isCountrySelected}/>
            );
        });
        
        return updatedCountriesList;
    }
    
    render(){
        console.log("countries-list render");
        const {selectedCountries,color} = this.props;
        if(selectedCountries.length > 0){
            return (
                <CountriesContainer color={color}>
                    {this.renderCountries()}
                </CountriesContainer>
            );
        }
        else{
            return (
                <DataNotFound color={color}>No Data Found...!</DataNotFound>
            );
        }
    }
}

export default RenderCountries;