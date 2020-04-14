import React from 'react';
import shallowEqual from '../../../../node_modules/@babel/types/lib/utils/shallowEqual';
import {FilteredCountriesSection,SearchCountry,Select,I,Input,SearchIcon} from './styledComponent';


class FilterCountriesByRegionOrCountry extends React.Component {
    
    shouldComponentUpdate(nextProps,nextState){
        return !shallowEqual(this.props,nextProps);
    }
    
    renderRegions = () => {
        let regions = [],option;
        const {countries} = this.props;
        countries.forEach(eachCountry => {
            regions.push(eachCountry.region);
        });
        const uniqueNames = Array.from(new Set(regions));
        uniqueNames.pop();
        uniqueNames.sort();
        uniqueNames.unshift('All');
        const regionsOptions = uniqueNames.map(eachOption => {
            if(eachOption !== ''){
                option = <option value={eachOption} key={eachOption}>{eachOption}</option>;
            }
            return option;
        });
        return regionsOptions;
    }
    
    
    render(){
        console.log("filter-countries render");
        const {color, searchCountry, selectedRegion,selectCountriesByAlphabeticalOrder} = this.props;
        return (
            <FilteredCountriesSection color={color}>    
                <SearchCountry color={color}>
                    <SearchIcon color={color}>
                        <I color={color} className="fa fa-search "></I>
                    </SearchIcon>
                    <Input type="text" placeholder="Search for a country" color={color} onChange={searchCountry}></Input>
                </SearchCountry>
                
                <label>
                    Sort By:&nbsp; 
                    <Select onChange={selectCountriesByAlphabeticalOrder}>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </Select>
                </label>
                
                <Select onChange={selectedRegion}>
                    {this.renderRegions()}
                </Select>
            </FilteredCountriesSection>
        );
    }
}

export default FilterCountriesByRegionOrCountry;

/*
<div className="filter-countries">
</div>      
<div className={`search ${className}`}>
</div>
*/