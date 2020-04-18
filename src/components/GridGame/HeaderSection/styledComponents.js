import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledHeader = styled.div`
    ${tw`flex flex-col justify-between text-center my-2 h-32 items-center`};
    background-color: ${props => props.theme === 'Light' ? "#fff" : "#1a202c"};
    color: ${props => props.theme === 'Light' ? 'black' : 'white'};
    width: ${props => props.level < 3 ? "350px" : "450px"};
`;

const StyledLevel = styled.h1`
    ${tw`text-xl self-center mx-1`}
`;

const StyledTopLevel = styled.h1`
    ${tw`text-xl mb-2`}
`;

const StyledTheme = styled.span`
    ${tw`text-xl px-1 py-1 mx-1`};
    border: ${props => props.theme === 'Light' ? '1px solid black' : '1px solid white'}
`;

const StyledLevelAndTheme = styled.div`
    ${tw`flex justify-between mb-2`};
    width: ${props => props.level < 3 ? "350px" : "450px"};
`;

export {StyledHeader,StyledLevel,StyledTopLevel,StyledTheme,StyledLevelAndTheme};