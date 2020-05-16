/*global fetch*/
import React from 'react';
import {withRouter} from 'react-router-dom';
import withCountries from '../../../HOCS/CountriesDashboardHOCS/getCountriesDetails';
import './CountriesDashboardApp.css';
import CountryDetailsCard from './CountryDetailsCard/countryDetailsCard';
import {Loading,CountriesDetailsContainer,BorderCountriesButton} from './styledComponent';


class ShowCountryDetails extends React.Component{
    state = {
        selectedCountry :null,
        countries:[]
    }
    
    // componentDidUpdate(){
    //     console.log("componentDidMount",this.props);
    //     const country = this.props.countries.filter(eachCountry => {
    //         return eachCountry.name === this.props.match.params.id;
    //     });
    //     setTimeout(() => {
    //         this.setState({countries:this.props.countries,selectedCountry:country});
    //     },200);
    // }
    
    getData(){
        const country = this.props.countries.find(eachCountry => {
            return eachCountry.name === this.props.match.params.id;
        });
        this.setState({countries:this.props.countries,selectedCountry:country});
    }
    
    renderLanguages = () => {
        let languages=[];
        const country = this.state.selectedCountry;
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
        const country = this.state.selectedCountry;
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
        const selectedCountry = countries.find(eachCountry => {
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
        console.log(this.state.selectedCountry);
    }
    
    render() {
        const {color,countries} = this.props;
        const {selectedCountry} = this.state;
        if(countries.length && selectedCountry === null){
            this.getData();
        }
        if(this.state.selectedCountry !== null){
            const country = this.state.selectedCountry;
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


export default withRouter(withCountries(ShowCountryDetails));
