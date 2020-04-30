import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledAuthenticationContainer = styled.div`
    ${tw`w-64 h-64 flex flex-col m-auto border border-black justify-center items-center mt-20`}
`;

const StyledUserInput = styled.input`
    ${tw`w-9/12 h-12 border px-2 mb-2 rounded `};
`;

const StyledUserPassword = styled.input`
    ${tw`w-9/12 h-12 border px-2 mb-2 rounded`}
`;

const StyledLoginButton = styled.button`
    ${tw`w-9/12 py-2 flex justify-center items-center text-base rounded bg-black text-white mb-8`};
    background-color: ${props => props.isSubmit ? '#2d3748' : 'black'}
`;


const StyledHeader = styled.h1`
    ${tw`text-base self-start ml-8 my-2 font-bold`}
`;

export {StyledAuthenticationContainer,StyledUserInput,StyledUserPassword,StyledLoginButton,StyledHeader};