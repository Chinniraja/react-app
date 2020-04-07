import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const FilteredCountriesSection = styled.div`
${tw`flex justify-between py-4 px-4 -mx-4 `}
background-color: ${props => props.color};
color:${props => props.color === '#fff' ? 'black' : 'white'};
margin-top: ${props => props.color === '#fff' ? "5px" : "0px"};
`;

const SearchCountry = styled.div`
${tw`h-16 flex shadow-lg bg-white hover:border-2 border-blue-400`}
`;

const SearchIcon = styled.div`
${tw`flex`}
background-color: ${props => props.color === '#fff' ? '#fff' : '#4a5568'};
color: ${props => props.color === '#fff' ? 'gray' : 'white'};
`;

const Select = styled.select`
${tw`text-black h-8 my-4`}
`;

const I = styled.i`
${tw`py-6 px-1`}
`;

const Input = styled.input`
${tw`h-full rounded-none`}
background-color: ${props => props.color === '#fff' ? '#fff' : '#4a5568'};
color: ${props => props.color === '#fff' ? 'gray' : 'white'};
::placeholder {
  color: ${props => props.color === '#fff' ? 'gray' : 'white'};
}
`;

export {FilteredCountriesSection,SearchCountry,Select,I,Input,SearchIcon};