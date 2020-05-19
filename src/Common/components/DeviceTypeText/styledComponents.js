import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DeviceTypeTextContainer = styled.div`
    ${tw`flex flex-col justify-center items-center w-full bg-gray-300 py-2`}
`;

const StyledContainer = styled.div`
    ${tw`flex w-4/12 flex justify-center`}
`;

const StyledLabel = styled.label`
    ${tw`self-center h-10 px-2`}
`;

const StyledTitle = styled.h2`
    ${tw`text-xl font-bold`}
`;
const StyledText = styled.p`
    ${tw`text-base`}
`;

export {DeviceTypeTextContainer,StyledText,StyledLabel,StyledTitle,StyledContainer};