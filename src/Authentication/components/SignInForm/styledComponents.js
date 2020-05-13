import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledAuthenticationContainer = styled.div`
    ${tw`w-64 flex flex-col m-auto border border-black justify-center items-center mt-20`}
`;

const StyledUserInput = styled.input`
    ${tw`w-full h-12 border px-2 rounded `};
`;

const StyledUserPassword = styled.input`
    ${tw`w-full h-12 border px-2 rounded`}
`;

const StyledLoginButton = styled.button`
    ${tw`w-9/12 py-2 flex justify-center items-center text-base rounded bg-black text-white mb-8`};
    background-color: ${props => props.isSubmit ? '#2d3748' : 'black'}
`;


const StyledHeader = styled.h1`
    ${tw`text-base self-start ml-8 my-4 font-bold`}
`;

const StyledPasswordInputError = styled.span`
    ${tw`text-red-400 w-full`}
    font-size: 14px;
`;

const StyledUserInputError = styled.span`
    ${tw`text-red-400 w-full`}
    font-size: 14px;
`;

const StyledInputFieldContainer = styled.div`
    ${tw`w-9/12`}
    height: 74px;
`;

export {StyledAuthenticationContainer,StyledUserInput,StyledInputFieldContainer,StyledUserPassword,StyledLoginButton,StyledHeader,StyledPasswordInputError,StyledUserInputError};