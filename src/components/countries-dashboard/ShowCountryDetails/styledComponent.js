import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Loading = styled.div `
${tw`flex justify-center items-center w-screen text-4xl h-screen`}
`;

const CountriesDetailsContainer = styled.div`
background-color: ${props => props.color === "#fff" ? '#fff' : '#1a202c'};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
margin-top: ${props => props.color === '#fff' ? '5px' : '0px'};
`;

const BorderCountriesButton = styled.button`
${tw`font-semibold  py-2 px-4 m-2 rounded shadow`}
background-color: ${props => props.color === '#fff' ? '#fff' : '#4a5568'};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

export {BorderCountriesButton,Loading,CountriesDetailsContainer};