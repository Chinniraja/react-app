import React from 'react';
import {observer} from 'mobx-react';

import eventStore from '../../../stores/Store/EventStore/eventStore';
import AddEvent from '../AddEvent/addEvent';
import RenderEvents from '../RenderEvents/renderEvents';
import  {StyledEventsDashboardContainer,Header} from './styledComponent';



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