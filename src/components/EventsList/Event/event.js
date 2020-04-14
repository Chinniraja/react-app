import React from 'react';
import {observer} from 'mobx-react';
import eventStore from '../../../stores/Store/EventStore/eventStore';
import {StyledEventContainer,EventDetails,StyledInput,AddEventToEvents,AddEventButton,StyledSpan,DeleteButton,EditButton} from './styledComponent';

@observer
class Event extends React.Component {
    
    isUpdate = () => {
        const {isEventUpdate} = this.props.eachEvent;
        isEventUpdate();
    }
    
    onChangeHandleName = (event) => {
        const {onUpdateEventName} = this.props.eachEvent;
        onUpdateEventName(event);
    }
    
    onChangeHandleLocation = (event) => {
        const {onUpdateEventLocation} = this.props.eachEvent;
        onUpdateEventLocation(event);
    }
    
    onDeleteEvent = () => {
        const {eachEvent} = this.props;
        eventStore.onDeleteEvent(eachEvent);
    }
    
    render(){
        const {eventName,eventLocation,isUpdate,} = this.props.eachEvent;
        return (
            <StyledEventContainer>
                <EventDetails>
                    {isUpdate === true && <StyledInput defaultValue={eventName} placeholder="Event Name" onChange={this.onChangeHandleName}></StyledInput>}
                    {isUpdate === true && <StyledInput defaultValue={eventLocation} placeholder="Event Location" onChange={this.onChangeHandleLocation}></StyledInput>}
                    {isUpdate === false && <StyledSpan>Event Name: {eventName}</StyledSpan>}
                    {isUpdate === false && <StyledSpan>Event Location: {eventLocation}</StyledSpan>}
                </EventDetails>
                    
                <AddEventToEvents>
                    {isUpdate === true && <AddEventButton onClick={this.isUpdate}>Update Event</AddEventButton>}
                    {isUpdate === false && <EditButton onClick={this.isUpdate}>Edit</EditButton>}
                    {isUpdate === false && <DeleteButton onClick={this.onDeleteEvent}>Delete</DeleteButton>}
                </AddEventToEvents>
            </StyledEventContainer>
        );
    }
}

export default Event;