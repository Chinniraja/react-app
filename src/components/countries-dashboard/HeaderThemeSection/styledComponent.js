import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderContainer = styled.div`
${tw`h-16 w-screen p-4 -mx-4 flex justify-between shadow-md`}
background-color: ${props => props.color === '#fff' ? '#fff' : '#4a5568'};
color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

const Theme = styled.div`
${tw`flex justify-around`}
`;

const H3 = styled.h3`
${tw`text-lg font-bold`}
`;

const Span = styled.span`
${tw`m-1`}
`;

export {HeaderContainer,Theme,H3,Span};
