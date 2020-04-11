import React from 'react';
import AddEvent from '../AddEvent/addEvent.js';
import RenderEvents from '../RenderEvents/renderEvents.js';
import  {StyledEventsDashboardContainer,Header} from './styledComponent.js';
import eventStore from '../../../stores/Store/EventStore/eventStore.js';
import {observer} from 'mobx-react';

@observer
class EventsDashboard extends React.Component{
    render(){
        return (
            <StyledEventsDashboardContainer>
                <Header>Events List</Header>
                <AddEvent/>
                {eventStore.eventsList.length > 0 && <RenderEvents/>}
            </StyledEventsDashboardContainer>
        );
    }
}

export default EventsDashboard;