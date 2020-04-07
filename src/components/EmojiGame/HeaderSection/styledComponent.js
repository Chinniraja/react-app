import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderContainer = styled.div`
    ${tw`flex justify-between h-20 items-center shadow px-4`}
    background-color: ${props => props.theme === '#fff' ? '#fff' : '#2d3748'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
`;

const H1 = styled.h1`
    ${tw`text-3xl`}
`;

const ScoreCard = styled.div`
    ${tw`flex items-center`}
`;

const Score = styled.span`
    ${tw`flex items-center font-bold mx-2`}
`;

const TopScore = styled.span`
    ${tw`flex items-center font-bold mx-2`}
`;

const Theme = styled.button`
    ${tw`mx-1 h-12 px-4`}
    border: ${props => props.theme === '#fff' ? '1px solid black' : '1px solid white'}
`;

const P = styled.p`
    ${tw`font-bold items-start text-xl mx-1`}
`;

export {HeaderContainer,H1,ScoreCard,Score,TopScore,Theme,P};