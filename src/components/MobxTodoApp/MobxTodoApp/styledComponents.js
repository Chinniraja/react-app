import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledTodoAppContainer = styled.div`
    ${tw`w-9/12`}
`;

const StyledTodoApp = styled.div`
    ${tw` w-screen h-screen flex flex-col items-center`}
`;

const Header = styled.h1`
    ${tw`text-base text-red-200 items-center my-12`};
    font-size: 100px;
    font-weight: none;
`;

const StyledNetworkError = styled.div`
    ${tw`h-64 w-9/12 my-4 flex flex-col justify-center items-center mx-auto`};
    
`;

const StyledTryAgainButton = styled.button`
    ${tw`text-base bg-blue-600 text-white p-2 w-24 rounded `}
`;

const StyledErrorMessage = styled.span`
    ${tw`text-2xl font-bold`}
`;


export {StyledTodoAppContainer,StyledTodoApp,Header,StyledNetworkError,StyledTryAgainButton,StyledErrorMessage};