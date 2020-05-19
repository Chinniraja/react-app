import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DisplayMouseCoordinatesContainer = styled.div`
    ${tw`flex flex-col justify-center items-center w-full bg-gray-400 py-2`}
`;

const StyledCoordinatesText = styled.label`
    ${tw`w-full h-10 mr-2 px-2 text-black`}
`;

const StyledTitle = styled.h2`
    ${tw`text-xl font-bold`}
`;

export {DisplayMouseCoordinatesContainer,StyledCoordinatesText,StyledTitle};