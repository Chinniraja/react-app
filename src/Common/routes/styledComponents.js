import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div`
    ${tw`w-full h-screen text-center`}
`;

const Header = styled.h1`
    ${tw`w-full h-20 font-bold text-3xl py-4 bg-white`}
`;

export {Container,Header};