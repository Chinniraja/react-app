import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledTodo = styled.div`
    ${tw`flex justify-center items-center w-full shadow`}
    
`;

const CheckboxInput = styled.input`
    ${tw`rounded-full h-12 w-16 ml-1 mr-0`}
    :checked{
        background-color: green;
    }
`;

const TodoInput = styled.input`
    ${tw`rounded h-16 px-2`};
    text-decoration: ${props => props.disabled === false ? 'none' : 'line-through'};
    flex-grow: 1;
    border: 1px solid grey;
`;

const Span = styled.span`
    ${tw`h-16 w-16 text-center flex justify-center items-center text-red-400 text-2xl`}
`;

export {StyledTodo,CheckboxInput,TodoInput,Span};