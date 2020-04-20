import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledTodoListContainer = styled.div`
    ${tw`flex flex-col justify-center w-full items-center`}
`;

const StyledLoading = styled.div`
    ${tw`h-48 w-9/12 flex flex-col justify-center items-center mx-auto`}
`;

export {StyledTodoListContainer,StyledLoading};