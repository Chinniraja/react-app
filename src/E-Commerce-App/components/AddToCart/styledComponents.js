import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledAddToCart = styled.button`
    ${tw`bg-black w-full text-white p-2 rounded`}
`;

const StyledAddToCartContainer = styled.div`
    ${tw`w-full`}
`;

const StyledToasterContainer = styled.div`
    ${tw`flex text-green-600 justify-center items-center`}
`;

const StyledContent = styled.div`
    ${tw`text-base text-white mx-1`}
`;

export {StyledAddToCart,StyledAddToCartContainer,StyledContent,StyledToasterContainer};