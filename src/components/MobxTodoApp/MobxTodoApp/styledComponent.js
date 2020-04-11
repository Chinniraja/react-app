import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledTodoAppContainer = styled.div`
    ${tw`w-9/12`}
`;

const StyledTodoApp = styled.div`
    ${tw` w-screen h-screen flex flex-col items-center`}
`;

const Header = styled.h1`
    ${tw`text-6xl text-red-200 items-center my-12`}
`;

export {StyledTodoAppContainer,StyledTodoApp,Header};