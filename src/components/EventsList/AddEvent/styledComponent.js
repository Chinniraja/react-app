import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledAddEventContainer = styled.div`
    ${tw`w-9/12 h-32 py-4 flex justify-around items-center my-8`};
    border: 2px solid black;
`;

const EventDetails = styled.div`
    ${tw`flex flex-col mx-8`};
`;

const StyledInput = styled.input`
    ${tw`px-1 h-8 w-64 my-2`};
    border: 2px solid black;
    border-radius: 0px;
`;

const AddEventToEvents = styled.div`
    ${tw`flex flex-col`};
`;

const AddEventButton = styled.button`
    ${tw`h-8 w-32 self-center`};
    border: 2px solid black;
`;

export {StyledAddEventContainer,EventDetails,StyledInput,AddEventToEvents,AddEventButton};