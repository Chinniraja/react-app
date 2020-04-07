import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CountryCardProperties = styled.div `
${tw`flex flex-col items-start rounded shadow  my-2 w-56 items-start`}
background-color: ${props => props.color === '#fff' ? '#fff' : '#4a5568'};
color:${props => props.color === '#fff' ? 'black' : 'white'};
`;

const CountryDetails = styled.div`
${tw`pl-4 flex- flex-col`}
`;

const H3 = styled.h3`
${tw`font-bold my-1`}
`;

const Span = styled.span`
${tw`block my-2`}
`;

export {CountryCardProperties,CountryDetails,H3,Span};