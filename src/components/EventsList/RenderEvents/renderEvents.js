import React from 'react';
import {StyledEventsContainer} from './styledComponent.js';
import eventStore from '../../../stores/Store/EventStore/eventStore.js';
import Event from '../Event/event.js';

class RenderEvents extends React.Component {
    
    render(){
        const eventsCount = eventStore.eventsCount;
        return (
            <StyledEventsContainer>
                <strong>Number of Events: {eventsCount}</strong>
                {
                    eventStore.eventsList.map(eachEvent => {
                        return <Event eachEvent={eachEvent} key={eachEvent.id}/>;
                    })
                }
            </StyledEventsContainer>
        );
    }
}

export default RenderEvents;