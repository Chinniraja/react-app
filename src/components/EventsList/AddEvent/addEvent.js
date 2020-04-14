import React from 'react';
import {observer} from 'mobx-react';
import eventStore from '../../../stores/Store/EventStore/eventStore';
import {StyledAddEventContainer,EventDetails,StyledInput,AddEventToEvents,AddEventButton} from './styledComponent';

@observer
class AddEvent extends React.Component{
    
    onChangeEventName = (event) => {
        const {onChangeEventName} = eventStore;
        onChangeEventName(event);
    }
    
    onChangeEventLocation = (event) => {
        const {onChangeEventLocation} = eventStore;
        onChangeEventLocation(event);
    }
    
    onAddEvent = () => {
        const {onAddEvent} = eventStore;
        onAddEvent();
    }
    
    render(){
        return (
            <StyledAddEventContainer>
                <EventDetails>
                    <StyledInput value={eventStore.eventName} placeholder="Event Name" onChange={this.onChangeEventName}></StyledInput>
                    <StyledInput value={eventStore.eventLocation} placeholder="Event Location" onChange={this.onChangeEventLocation}></StyledInput>
                </EventDetails>
                
                <AddEventToEvents>
                    <AddEventButton onClick={this.onAddEvent}>Add Event</AddEventButton>
                </AddEventToEvents>
            </StyledAddEventContainer>
        );
    }
}

export default AddEvent;