import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledProductsContainer = styled.div`
    ${tw`w-full flex flex-col border border-yellow-400`}
`;

const StyledProductsListContainer = styled.div`
    ${tw`w-full h-full flex flex-wrap justify-around items-center`}
`;

export {StyledProductsContainer,StyledProductsListContainer};