import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EditToggleContainer = styled.div`
    ${tw`flex flex-col justify-center items-center w-full h-24 bg-gray-300`}
`;

const StyledContainer = styled.div`
    ${tw`flex w-4/12`}
`;

const StyledInput = styled.input`
    ${tw`w-full h-8 mr-2 text-black border-2 border-blue-400`}
`;

const StyledEditBtn = styled.button`
    ${tw`bg-blue-500 h-8 rounded px-2 text-white`}
`;

const StyledTitle = styled.h2`
    ${tw`text-xl font-bold`}
`;

const StyledText = styled.p`
    ${tw`text-base w-full`}
`;

export {EditToggleContainer,StyledInput,StyledEditBtn,StyledTitle,StyledContainer,StyledText};