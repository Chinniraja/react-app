import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojisContainer = styled.div`
    ${tw`flex flex-wrap  justify-center px-12`}
    background-color: ${props => props.theme === '#fff' ? '#ebf8ff' : '#1a202c'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
`;

const H1 = styled.h1`
    ${tw`font-bold text-4xl m-1`}
`;


const Message = styled.h1`
    ${tw`font-bold text-3xl m-1`}
    color: ${props => props.gameState === 'LOSE!' ? '#f56565' : '#68d391'};
`;


const TryAgain = styled.button`
    ${tw`text-2xl bg-indigo-500 text-white rounded h-12 px-4 mt-1`}
`;

const ResultContainer = styled.div`
    ${tw`h-screenc flex flex-col justify-center items-center`}
    background-color: ${props => props.theme === '#fff' ? '#ebf8ff' : '#1a202c'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
    flex-grow: 1;
`;

export {EmojisContainer,H1,Message,TryAgain,ResultContainer};