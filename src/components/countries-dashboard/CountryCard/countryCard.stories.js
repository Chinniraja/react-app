import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color, text, boolean, number } from '@storybook/addon-knobs/react'

import '../../../styles/tailwind.css'
import CountryCard from './countryCard'

const eachCountry = {"name":"India","topLevelDomain":[".in"],"alpha2Code":"IN","alpha3Code":"IND","callingCodes":["91"],"capital":"New Delhi","altSpellings":["IN","Bhārat","Republic of India","Bharat Ganrajya"],"region":"Asia","subregion":"Southern Asia","population":1295210000,"latlng":[20.0,77.0],"demonym":"Indian","area":3287590.0,"gini":33.4,"timezones":["UTC+05:30"],"borders":["AFG","BGD","BTN","MMR","CHN","NPL","PAK","LKA"],"nativeName":"भारत","numericCode":"356","currencies":[{"code":"INR","name":"Indian rupee","symbol":"₹"}],"languages":[{"iso639_1":"hi","iso639_2":"hin","name":"Hindi","nativeName":"हिन्दी"},{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],"translations":{"de":"Indien","es":"India","fr":"Inde","ja":"インド","it":"India","br":"Índia","pt":"Índia","nl":"India","hr":"Indija","fa":"هند"},"flag":"https://restcountries.eu/data/ind.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation","otherAcronyms":[],"otherNames":[]}],"cioc":"IND"}
const isCountrySelected = true;

export default {
   component: CountryCard,
   title:"CountryCard",
  decorators: [withKnobs]
}
export const knobs = () => 
<CountryCard
   color={color("color","red")}
   isCountrySelected={isCountrySelected}
   eachCountry={eachCountry}
   />

export const withAButton = () => (
  <button disabled={boolean("Disabled", false)} style={{backgroundColor: color("Color","green")}}>
    {text("Label", "Hello Storybook")}
  </button>
);

export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};