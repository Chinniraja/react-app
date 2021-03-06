/*global fetch*/
import React from 'react';
import {withRouter} from 'react-router-dom';
import withCountries from '../../../HOCS/CountriesDashboardHOCS/getCountriesDetails';
import RenderCountries from '../RenderCountries/renderCountries';
import FilterCountriesByRegionOrCountry from '../FilterCountriesByRegionOrCountry/filterCountriesByRegionOrCountry';
import {DashboardContainer,Loading} from './styledComponent';

class CountriesDashboardApp extends React.Component{
    state = {
        searchCountry:'',
        selectedRegion:'All',
        isCountrySelected:false,
        selectedCountry:null,
        alphabeticalOrder:'A-Z'
    }
    
    searchCountry = (event) => {
        this.setState({searchCountry:event.target.value});
    }
    
    selectedRegion = (event) => {
        this.setState({selectedRegion:event.target.value});
    }
    
    selectCountriesByAlphabeticalOrder = (event) => {
        this.setState({alphabeticalOrder:event.target.value});
    }
    
    isCountrySelected = (event) => {
        let country;
        const selectedCountry = this.props.countries.filter(eachCountry => {
            if(event.currentTarget.id === eachCountry.name){
                this.props.history.push(eachCountry.name);
                country = event.currentTarget.id === eachCountry.name;
            }
            return country;
        });
        this.setState({isCountrySelected:true,selectedCountry:selectedCountry});
    }
    
    goBack = () => {
        this.setState({isCountrySelected:false});
    }
    
    filteredCountries = () => {
        const {searchCountry,selectedRegion,alphabeticalOrder} = this.state;
        let filteredCountries,updatedFilteredCountries;
        if(selectedRegion === 'All'){
            filteredCountries = this.props.countries.filter(eachCountry => {
                if(searchCountry !== ''){
                    if(searchCountry.match("^[a-zA-Z]*$")){
                        return eachCountry.name.toLowerCase().match(searchCountry.toLowerCase());
                    }
                    return null;
                }
                else{
                    return eachCountry;
                }
            });
        }
        else{
            filteredCountries = this.props.countries.filter(eachCountry => {
                if(searchCountry !== ''){
                    if(selectedRegion === eachCountry.region){
                        if(searchCountry.match("^[a-zA-Z]*$")){
                            if(eachCountry.name.toLowerCase().match(searchCountry.toLowerCase())){
                                return eachCountry;
                            }
                            return null;
                        }
                        return null;
                    }
                    return null;
                }
                else{
                    return eachCountry.region === selectedRegion;
                }
            });
        }
        if(alphabeticalOrder === 'A-Z'){
            updatedFilteredCountries = filteredCountries.sort((firstCountry,secondCountry) => (firstCountry.name > secondCountry.name) ? 1 : -1);
        }
        else {
            updatedFilteredCountries = filteredCountries.sort((firstCountry,secondCountry) => (firstCountry.name > secondCountry.name) ? -1 : 1);
        }
        return updatedFilteredCountries;
    }
    
    render() {
        const filteredCountries = this.filteredCountries();
        const {color,countries} = this.props;
        if(countries.length){
            return (
                <DashboardContainer color={color}>
                    <FilterCountriesByRegionOrCountry color={color} countries={countries} selectedRegion={this.selectedRegion} searchCountry={this.searchCountry} selectCountriesByAlphabeticalOrder={this.selectCountriesByAlphabeticalOrder}/>
                    <RenderCountries color={color} selectedCountries={filteredCountries} isCountrySelected={this.isCountrySelected}/>
                </DashboardContainer>
            );
        }
        else{
            return (
                <Loading color={color}>
                    <i className="fa fa-spinner fa-pulse"></i>
                </Loading>
            );
        }
    }
}

export default withRouter(withCountries(CountriesDashboardApp));