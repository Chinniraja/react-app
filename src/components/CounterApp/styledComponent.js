import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const StyledCounterContainer = styled.div`
    ${tw`h-screen items-center w-screen flex flex-col justify-center text-3xl font-bold bg-white`}
`;

const Button = styled.button`
    ${tw`px-4 w-16 h-16 bg-blue-700 m-2 rounded font-bold text-white`}
`;

const Input = styled.input`
    ${tw`w-40 text-center border-2 border-orange-400 h-16 m-2`}
`;

const Header = styled.h1`
    ${tw`text-5xl mb-2`}
`;

const Counter = styled.div`
    ${tw`flex`}
`;

export {StyledCounterContainer,Button,Input,Header,Counter};