import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledSelectSizeContainer = styled.div`
    ${tw`w-full flex flex-col justify-between items-center`}
    padding: 0;
    margin: 0;
    clear: both;
`;

const StyledSize = styled.span`
    ${tw`rounded-full flex justify-center items-center border border-gray-400 m-2 h-12 w-12`}
    background-color: ${props => props.isSelected ? 'black' : '#f7fafc'};
    color: ${props => props.isSelected ? 'white' : 'black'};
`;

const StyledText = styled.div`
    ${tw`font-bold mt-4`}
`;

const StyledSizes = styled.div`
    ${tw`w-full flex flex-wrap justify-around mt-8 items-center`}
`;

export {StyledSelectSizeContainer,StyledSize,StyledText,StyledSizes};