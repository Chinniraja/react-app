/*global fetch*/
import React from 'react';
import {withRouter} from 'react-router-dom';
import './CountriesDashboardApp.css';
import CountryDetailsCard from './CountryDetailsCard/countryDetailsCard.js';
import {Loading,CountriesDetailsContainer,BorderCountriesButton} from './styledComponent.js';


class ShowCountryDetails extends React.Component{
    state = {
        selectedCountry :null,
        countries:[],
    }
    
    async componentDidMount(){
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        const jsonData = await data.json();
        const country = jsonData.filter(eachCountry => {
            return eachCountry.name === this.props.match.params.id;
        });
        setTimeout(() => {
            this.setState({countries:jsonData,selectedCountry:country});
        },200);
    }
    
    async getData(){
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        const jsonData = await data.json();
        const country = jsonData.filter(eachCountry => {
            return eachCountry.name === this.props.match.params.id;
        });
        this.setState({countries:jsonData,selectedCountry:country});
    }
    
    renderLanguages = () => {
        let languages=[];
        const country = this.state.selectedCountry[0];
        country.languages.forEach(eachLanguage => {
            languages = [...languages,eachLanguage.name];
        });
        return <span><strong>languages:</strong> {languages.join(', ')}</span>;
    }
    
    getCountryName = (country) => {
        let countryName;
        const {countries} = this.state;
        countries.forEach(eachCountry => {
            if(eachCountry.alpha3Code === country){
                countryName = eachCountry.name;
            }
        });
        return countryName;
    }
    
    borderCountries = () => {
        const country = this.state.selectedCountry[0];
        const {color} = this.props;
        if(country.borders.length) {
            const borderCountries = country.borders.map(country => {
                const countryName = this.getCountryName(country);
                return <BorderCountriesButton color={color} onClick={this.isCountrySelected} id={countryName} key={countryName}>{countryName}</BorderCountriesButton>;
            });
            return borderCountries;
        }
        else {
            return <span>No Border Countries</span>;
        }
    }
    
    isCountrySelected = (event) => {
        const {countries} = this.state;
        const selectedCountry = countries.filter(eachCountry => {
            if(event.target.id === eachCountry.name){
                this.props.history.push(eachCountry.name);
                return eachCountry;
            }
            else{
                return null;
            }
        });
        this.setState({selectedCountry:selectedCountry});
    }
    
    goBack = () => {
        this.props.history.goBack();
        this.getData();
    }
    
    render() {
        const {color} = this.props;
        if(this.state.selectedCountry !== null){
            const country = this.state.selectedCountry[0];
            return (
                <CountriesDetailsContainer color={color}>
                    <CountryDetailsCard color={color} key={country.name} country={country} borderCountries={this.borderCountries} renderLanguages={this.renderLanguages} goBack={this.goBack}/>
                </CountriesDetailsContainer>
            );
        }
        else{
            return (
                <Loading>
                    <i className="fa fa-spinner fa-pulse"></i>
                </Loading>
                
            );
        }
    }
}


export default withRouter(ShowCountryDetails);
