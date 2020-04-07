import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const DashboardContainer = styled.div`
    background-color: ${props => props.color === '#fff' ? '#2b3945' : '#fff'}
    color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;

const Loading = styled.div `
    ${tw`flex justify-center w-screen text-4xl my-20`}
    background-color: ${props => props.color === '#fff' ? '#2b3945' : '#fff'}
    color: ${props => props.color === '#fff' ? 'black' : 'white'};
`;


export {DashboardContainer,Loading};