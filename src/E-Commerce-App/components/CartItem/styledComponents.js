import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledCartItem = styled.div`
    ${tw`w-full flex my-2 pt-2`}
    border-top: 1px solid white;
`;

const StyledImage = styled.img`
    ${tw`px-2 h-16 mb-2 bg-white `};
    width: 50px;
`;

const StyledItemTitle = styled.h1`
    ${tw`text-base text-white`}
`;

const StyledItemDescription = styled.div`
    ${tw`w-full h-20 flex flex-col pl-2`}
`;

const StyledDescription = styled.span`
    ${tw`text-gray-400`}
    font-size:10px;
`;

const StyledQuatity = styled.span`
    ${tw`text-gray-400`}
    font-size:10px;
`;

const StyledDeleteButton = styled.button`
    ${tw`w-20 text-black flex justify-end items-center`}
`;

const StyledPrice = styled.span`
    ${tw`w-20 text-yellow-600 flex justify-end items-center mt-1`}
    font-size: 14px;
`;


const StyledDeleteAndPriceContainer = styled.div`
    ${tw`h-20 flex flex-col items-end`}
`;

export {StyledDeleteAndPriceContainer,StyledPrice,StyledCartItem,StyledImage,StyledItemTitle,StyledDeleteButton,StyledQuatity,StyledDescription,StyledItemDescription};