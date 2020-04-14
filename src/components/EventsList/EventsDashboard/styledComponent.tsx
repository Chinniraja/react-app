import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledEventsDashboardContainer = styled.div`
    ${tw`mx-8 bg-white flex flex-col items-center mt-2 rounded-t`};
    border: 2px solid black;
`;

const Header = styled.div`
    ${tw`h-12 bg-black flex justify-center w-full text-white items-center`}
`;

export {StyledEventsDashboardContainer,Header};