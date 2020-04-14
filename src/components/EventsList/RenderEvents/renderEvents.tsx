import React from 'react';

import eventStore from '../../../stores/Store/EventStore/eventStore';
import Event from '../Event/event';
import {StyledEventsContainer} from './styledComponent';


class RenderEvents extends React.Component {
    
    render(){
        const eventsCount = eventStore.eventsCount;
        return (
            <StyledEventsContainer>
                <strong>Number of Events: {eventsCount}</strong>
                {
                    eventStore.eventsList.map((eachEvent) => {
                        return <Event eachEvent={eachEvent} key={eachEvent.id}/>;
                    })
                }
            </StyledEventsContainer>
        );
    }
}

export default RenderEvents;