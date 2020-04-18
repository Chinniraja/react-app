import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledCell = styled.span`
    ${tw`m-1 bg-gray-700`};
    background-color: ${props => props.theme === 'Light'  ? '#4a5568' : "#2c5282"};
    color: ${props => props.theme === 'Light' ? 'black' : 'white'};
    pointer-events: ${props => props.disable ? 'none' : 'auto'};
`;
const StyledColor = styled.div`
    ${tw`h-full w-full`}
    background-color: ${props => props.wrong ? 'red' : props.theme === 'Light' ? '#38a169' : '#4fd1c5'};
    transition: all 0.5s;
    transform: ${props => props.transition ? 'scale(1)' : 'scale(0)'};
`;

export {StyledCell,StyledColor};