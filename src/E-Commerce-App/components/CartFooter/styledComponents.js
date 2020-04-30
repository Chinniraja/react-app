import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledFooterSection = styled.div`
    ${tw`w-full h-24`}
`;

const StyledSubTotal = styled.div`
    ${tw`w-full h-12 flex justify-between items-center text-4xl px-2`};
`;

const StyledCheckoutButton = styled.button`
    ${tw`w-full bg-black text-white h-12 px-2 rounded`}
`;

const StyledTitle = styled.h1`
${tw`text-base text-gray-400`}
`;

const StyledAmount = styled.span`
    ${tw`text-base text-yellow-600`}
`;

export {StyledFooterSection,StyledSubTotal,StyledCheckoutButton,StyledTitle,StyledAmount};