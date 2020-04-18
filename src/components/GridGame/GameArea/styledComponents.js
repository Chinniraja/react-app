import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledGridArea = styled.div`
    ${tw`text-center`};
    width: ${props => props.level < 3 ? "350px" : "450px"};
    height: ${props => props.level < 3 ? "350px" : "450px"};
    display : grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(${props => props.level + 3}, minmax(0, 1fr));
`;

const StyledGameResult = styled.div`
    ${tw`flex flex-col justify-center items-center py-2`};
`;

const StyledResult = styled.h1`
    ${tw`font-bold text-3xl text-green-500`}
`;

const StyledPlayAgainButton = styled.button`
    ${tw`font-bold text-xl bg-indigo-500 text-white h-12 px-4 my-1 rounded`}
`;

const StyledLevel = styled.h1`
    ${tw`font-bold text-4xl text-black`};
    color: ${props => props.theme === 'Light' ? 'black' : 'white'};
`;

export {StyledGridArea,StyledGameResult,StyledResult,StyledPlayAgainButton,StyledLevel};
    