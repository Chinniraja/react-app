import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Input = styled.input`
    ${tw` h-16 w-9/12 px-2`};
    flex-grow: 1;
    
`;

const StyledAddTask = styled.div`
    ${tw`flex items-center shadow`}
`;

const DropDown = styled.span`
    ${tw`w-16 h-16 flex flex-col justify-center items-center rounded`}
`;

export {StyledAddTask,DropDown,Input};