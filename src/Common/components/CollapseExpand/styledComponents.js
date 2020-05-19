import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CollapseExpandContainer = styled.div`
    ${tw`flex flex-col justify-center items-center w-full bg-gray-400 py-2`}
`;

const StyledContainer = styled.div`
    ${tw`flex w-4/12`}
`;

const StyledLabel = styled.label`
    ${tw`h-8 mr-2 text-black`}
`;

const StyledEditBtn = styled.button`
    ${tw`bg-blue-500 h-8 rounded px-2 text-white`}
`;

const StyledTitle = styled.h2`
    ${tw`text-xl font-bold`}
`;

const StyledButtonAndListWrapper = styled.div`
    ${tw`text-left`}
`;

const StyledListContainer = styled.ul`
    ${tw`list-none`}
`;

const Item = styled.li``;

export {CollapseExpandContainer,StyledLabel,StyledEditBtn,StyledTitle,StyledContainer,Item,StyledListContainer,StyledButtonAndListWrapper};