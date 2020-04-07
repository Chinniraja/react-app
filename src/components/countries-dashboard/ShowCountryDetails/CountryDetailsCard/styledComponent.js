import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CountryDetails = styled.div`
${tw``}
`;

const Button = styled.div`
${tw`w-20 flex justify-center text-white font-bold py-2 rounded shadow`}
background-color: ${props => props.color === '#fff' ? '#fff' : '#4a5568'};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

const BorderCountriesContainer = styled.div`
${tw`flex flex-col`}
`;

const Content = styled.div`
${tw`w-6/12 mr-2`}
`;

const Span = styled.div`
${tw`my-2`}
`;

const CountryContentDetails = styled.div`
${tw`flex flex-col flex-grow px-2`}
`;

const Buttons = styled.div`
${tw`flex flex-wrap border-1`}
`;

const CountryDetailsWrapper = styled.div`
${tw`flex`}
`;

const StyledContryDetails = styled.div`
${tw`p-4 -mx-4`}
background-color: ${props => props.color};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

const I = styled.i`
${tw`self-center m-1`}
`;

export {
    StyledContryDetails,
    CountryDetails,
    Button,
    BorderCountriesContainer,
    Content,
    Span,
    CountryContentDetails,
    Buttons,
    CountryDetailsWrapper,
    I
};