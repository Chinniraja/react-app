import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledCartListContainer = styled.div`
    ${tw`w-full overflow-y-auto`}
    flex-grow: 1;
`;

const StyledContent = styled.span`
    ${tw`text-white flex flex-col justify-center items-center h-12`}
    margin-top: 50%;
    margin-bottom: 50%;
`;

export {StyledCartListContainer,StyledContent};