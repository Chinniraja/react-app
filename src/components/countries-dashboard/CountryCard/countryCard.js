import React from 'react';
import {CountryCardProperties,CountryDetails,H3,Span} from './styledComponent.js';

class CountryCard extends React.Component {
    
    render() {
        const {isCountrySelected,color} = this.props;
        const {name,flag,region,capital,population} = this.props.eachCountry;
        return (
            <CountryCardProperties onClick={isCountrySelected} id={name} color={color}>
                <div className="flag">
                    <img src={flag} className="country-image"  alt={`${name}Flag`}/>
                </div>
                <CountryDetails>
                    <H3><strong>{name}</strong></H3>
                    <Span><strong>Population: </strong></Span>
                    <Span>{population}</Span>
                    <Span><strong>Region: </strong>{region}</Span>
                    <Span><strong>Capital: </strong>{capital}</Span>
                </CountryDetails>
            </CountryCardProperties>
        );
    }
}

export default CountryCard;