import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledProductContainer = styled.div`
    ${tw`flex flex-col justify-center mx-2 items-center mb-2`};
    width: 200px;
`;

const StyledImageAndShippingContainer = styled.div`
    ${tw`flex flex-col`}
    position: relative;
`;

const StyledImage = styled.img`
    ${tw`w-full h-full rounded `};
`;

const StyledFreeShipping = styled.span`
    ${tw`text-white w-24 text-center bg-black p-2`}
    font-size: 12px;
    position: absolute;
    top: 0px;
    right: 0px;
`;

const StyledDescription = styled.span`
    ${tw`text-base text-center h-12`}
`;

const StyledPrice = styled.span`
    ${tw`text-base`}
`;

const StyledInstallments = styled.span`
    ${tw`text-base text-gray-800 mb-2`}
`;

const StyledSeparator = styled.div`
    ${tw`text-yellow-600 text-center -mt-4 mb-1 flex flex-col items-start justify-start font-bold`}
`;

export {StyledProductContainer,StyledImage,StyledSeparator,StyledFreeShipping,StyledDescription,StyledPrice,StyledInstallments,StyledImageAndShippingContainer};