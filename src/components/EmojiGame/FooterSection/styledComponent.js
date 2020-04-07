import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledFooterContainer = styled.div`
    ${tw`px-4 h-24`}
    background-color: ${props => props.theme === '#fff' ? '#fff' : '#2d3748'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
`;

const H1 = styled.h1`
    ${tw`text-2xl font-bold`}
`;

const StyledInstructions = styled.p`
    ${tw`text-base px-4`}
`;

export {StyledFooterContainer,H1,StyledInstructions};