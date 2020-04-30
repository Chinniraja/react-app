import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledDashboard = styled.div`
    ${tw` flex flex-col justify-center items-center py-8 h-screen w-screen`};
    background-color: ${props => props.theme === 'Light' ? '#fff' : '#1a202c'};
    color: ${props => props.theme === '#fff' ? 'black' : 'white'};
`;

const StyledButton = styled.div`
    ${tw`h-12 w-20 bg-blue-600 rounded`}
`;

export {StyledDashboard,StyledButton};