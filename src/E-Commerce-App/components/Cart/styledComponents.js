import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledCartImageContainer = styled.div`
    ${tw`w-16 h-16 flex flex-col justify-center items-center text-white bg-gray-800`}
    position: fixed;
    z-index:1;
    top:0px;
`;

const StyledCartListContainer = styled.div`
    ${tw`w-6/12 h-screen flex mb-2`};
    position: fixed;
    z-index: 1;
    top:0px;
`;

const Styledcount = styled.p`
    ${tw`text-yellow-600 pb-1`}
    fonst-size: 4px;
    position: absolute;
    left: 30px;
`;

const StyledCartHeader = styled.div`
    ${tw`h-24 w-full px-2`}
    position:relative;
`;

const StyledProductsCount = styled.p`
    ${tw`text-yellow-600 text-center w-full`}
    fonst-size: 4px;
    position:absolute;
    top:33px;
    left:center;
`;


const StyledImageContainer = styled.div`
    ${tw`w-full h-full text-5xl flex justify-center items-center mx-1`}
`;

const StyledHeaderContainer = styled.div`
    ${tw`h-screen w-full flex flex-col bg-gray-800 text-white px-2 py-2`}
    
`;

const StyledCloseBtn = styled.div`
    ${tw`w-12 h-8 flex text-white items-center justify-center bg-gray-800`}
`;

export {StyledCartImageContainer,StyledCartHeader,StyledCloseBtn,StyledCartListContainer,Styledcount,StyledImageContainer,StyledHeaderContainer,StyledProductsCount};