import React from 'react';
import shallowEqual from '../../../../../node_modules/@babel/types/lib/utils/shallowEqual';
import {StyledContryDetails,CountryDetails,Button,BorderCountriesContainer,Content,Span,CountryContentDetails,Buttons,CountryDetailsWrapper,I} from './styledComponent';

class CountryDetailsCard extends React.Component{
    
    shouldComponentUpdate(nextProps,nextState){
        return !shallowEqual(this.props,nextProps);
    }
    
    render() {
        console.log("show-country-details render");
        const {country,goBack,color,renderLanguages,borderCountries} = this.props;
        return (
            <StyledContryDetails color={color} >
                <CountryDetails>
                    <Button onClick={goBack} color={color}><I className="fa fa-long-arrow-left"></I>Back</Button>
                    <CountryDetailsWrapper>
                        <div className="image">
                            <img src={country.flag} className="image-width" alt={`${country.name}_flag`}/>
                        </div>
                        <CountryContentDetails>
                            <h1><strong>{country.name}</strong></h1>
                            <div className="content-display">
                                <Content>
                                    <Span><strong>Native Name:</strong> {country.nativeName}</Span>
                                    <Span><strong>Population:</strong> {country.population}</Span>
                                    <Span><strong>Region:</strong> {country.region}</Span>
                                    <Span><strong>Sub Region:</strong> {country.subregion}</Span>
                                    <Span><strong>Capital:</strong> {country.capital}</Span>
                                </Content>
                            
                                <Content>
                                    <Span><strong>Top Level Domain:</strong> {country.topLevelDomain}</Span>
                                    <Span><strong>Currencies:</strong> {country.currencies[0].name}</Span>
                                    {renderLanguages()}
                                </Content>
                            </div>
                            <BorderCountriesContainer>
                                <Span><strong>Border Countries:</strong></Span>
                                <Buttons>
                                    {borderCountries()}
                                </Buttons>
                            </BorderCountriesContainer>
                        </CountryContentDetails>
                    </CountryDetailsWrapper>
                </CountryDetails>
            </StyledContryDetails>
        );
    }
}

export default CountryDetailsCard;

