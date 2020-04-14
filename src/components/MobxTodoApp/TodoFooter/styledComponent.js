import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledFooterContainer = styled.div`
    ${tw`flex justify-between shadow-triple py-2`};
`;

const ActiveTodosCount = styled.div`
    ${tw`flex justify-between w-28 px-2`}
`;

const FilterTodosContainer = styled.div`
    ${tw`flex justify-between w-48`};
`;

const All = styled.span`
    ${tw`text-base p-1`};
    border: ${props => props.selectedFilter === 'All' ? '1px solid pink' : 'none'};
`;

const Active = styled.span`
    ${tw`text-base p-1`};
    border: ${props => props.selectedFilter === 'Active' ? '1px solid pink' : 'none'};
`;

const Completed = styled.span`
    ${tw`text-base p-1`};
    border: ${props => props.selectedFilter === 'Completed' ? '1px solid pink' : 'none'};
`;

const ClearCompleted = styled.span`
    ${tw`text-base`};
    display: ${props => props.completedTodosCount ? 'flex' : 'none'};
`;

const StyledClearCompletedContainer = styled.div`
    ${tw`w-32`}
`;

export {StyledFooterContainer,ActiveTodosCount,FilterTodosContainer,All,Active,Completed,ClearCompleted,StyledClearCompletedContainer};