import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledHeaderContainer = styled.div`
    ${tw`w-full flex py-2 justify-between items-center mb-2`}
`;

const StyledProductsCount = styled.span`
    ${tw`h-full text-2xl items-center`}
`;

const StyledSizeDropDown = styled.select`
    ${tw`h-8`}
`;

const StyledText = styled.label`
    ${tw`text-base mr-1 items-center`}
`;

const StyledSortByPricesContainer = styled.div`
    ${tw`flex`}
`;

const StyledSearchBar = styled.input`
    ${tw`border border-black px-1 rounded h-8`}
`;

export {StyledHeaderContainer,StyledSearchBar,StyledProductsCount,StyledSizeDropDown,StyledSortByPricesContainer,StyledText};