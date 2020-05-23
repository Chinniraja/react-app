import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledEmojiCard = styled.div`
    ${tw`flex flex-wrap justify-between px-10`}
`;

const StyledButton = styled.button`
    ${tw`m-1 h-64 w-64 flex flex-col items-center rounded shadow-custom my-10`}
    background-color: ${props => props.theme === '#fff' ? '#fff' : '#2b6cb0'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
    background-color: ${props => props.theme};
`;

const StyledImage = styled.img`
    ${tw`h-48 w-48`}
    background-color: ${props => props.theme === '#fff' ? '#fff' : '#2b6cb0'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
    background-color: ${props => props.theme};
`;

const StyledName = styled.p`
    ${tw`h-12 rounded`}
    background-color: ${props => props.theme === '#fff' ? '#fff' : '#2b6cb0'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
    background-color: ${props => props.theme};
`;

export {StyledEmojiCard,StyledButton,StyledName,StyledImage};