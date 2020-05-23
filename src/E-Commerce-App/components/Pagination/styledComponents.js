import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledPaginationContainer = styled.div`
    ${tw`flex h-8 justify-between self-end my-6`}
`;

const StyledPreviousPage = styled.button`
    ${tw`bg-black text-white text-center h-full w-8`}
`;

const StyledPageContainer = styled.div`
    ${tw`h-full flex justify-between`}
`;

const StyledCurrentPage = styled.p`
    ${tw`border border-black text-center h-full w-8 mx-1 mr-1`}
`;

const StyledNextPage = styled.button`
    ${tw`bg-black text-white text-center h-full w-8`}
`;

const StyledTotalPages = styled.p`
    ${tw`text-center h-full w-8 mx-1 -ml-1`}
`;

export {StyledPaginationContainer,StyledPreviousPage,StyledPageContainer,StyledCurrentPage,StyledNextPage,StyledTotalPages};