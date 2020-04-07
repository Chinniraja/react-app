import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Loading = styled.div `
${tw`flex justify-center w-screen my-20 text-4xl`}
`;

const CountriesDetailsContainer = styled.div`
background-color: ${props => props.color};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
margin-top: ${props => props.color === '#fff' ? '5px' : '0px'};
`;

const BorderCountriesButton = styled.button`
${tw`font-semibold  py-2 px-4 m-2 rounded shadow`}
background-color: ${props => props.color === '#fff' ? '#fff' : '#4a5568'};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

export {BorderCountriesButton,Loading,CountriesDetailsContainer};