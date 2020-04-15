import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledCell = styled.div`
    ${tw`flex flex-col justify-center items-center m-1 border-2 border-green-400 bg-gray-700 text-white`};
`;

const StyledCellColor = styled.div`
    ${tw`flex flex-col w-full h-full justify-center items-center m-1 text-white`};
    background-color: ${props => props.isHidden ? 'green' : 'grey'};
`;

export {StyledCell,StyledCellColor};