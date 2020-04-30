import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledDashboard = styled.div`
    ${tw`w-screen h-auto flex flex-col bg-white`}
`;

const StyledSelectSizeContainer = styled.div`
    ${tw`w-3/12 flex flex-col rounded pt-4 px-1`};
`;

const StyledSignOutButton = styled.button`
    ${tw`p-2 ml-20 border border-black rounded`}
`;

const StyledProductListAndHeaderContainer = styled.div`
    ${tw`w-9/12 h-auto flex flex-col items-start pt-4 justify-between`};
`;


const StyledCartContainer = styled.h1`
    ${tw`flex w-full justify-end`}
    position:absolute;
    top:10px;
    right:-2px;
`;

const StyledDashboardHeader = styled.div`
    ${tw`flex justify-between items-center w-screen h-20 mt-2`}
    position:absolue
`;

const StyledContent = styled.div`
    ${tw`flex w-screen h-auto`}
    position:relative;
`;

export {StyledDashboard,StyledSelectSizeContainer,StyledSignOutButton,StyledProductListAndHeaderContainer,StyledDashboardHeader,StyledContent,StyledCartContainer};