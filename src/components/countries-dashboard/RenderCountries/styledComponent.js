import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CountriesContainer = styled.div`
${tw`flex flex-wrap justify-between px-4 -mx-4`}
background-color:${props => props.color};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

const DataNotFound = styled.div`
${tw`py-8 flex justify-center self-center h-24 -mx-4`}
background-color:${props => props.color};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;
export {CountriesContainer,DataNotFound};