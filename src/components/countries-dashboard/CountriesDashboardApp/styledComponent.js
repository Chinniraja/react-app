import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DashboardContainer = styled.div`
    background-color: ${props => props.color === '#fff' ? '#2b3945' : '#fff'}
    color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

const Loading = styled.div `
    ${tw`flex justify-center items-center w-screen text-4xl h-screen`}
    background-color: ${props => props.color === '#fff' ? '#2b3945' : '#fff'}
    color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;


export {DashboardContainer,Loading};