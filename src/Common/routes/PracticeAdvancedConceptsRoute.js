import React,{Component} from 'react';
import ViewEditToggle from '../components/ViewEditToggle';
import CollapseExpand from '../components/CollapseExpand';
import DeviceTypeText from '../components/DeviceTypeText';
import MouseCoordinates from '../components/MouseCoordinates';

import {Container,Header} from './styledComponents';

class PracticeAdvancedConceptsRoute extends Component {
    render() {
        return (
            <Container>
                <Header>{`HOC's Usage`}</Header>
                <ViewEditToggle/>
                <CollapseExpand listTitle={"Sample Shopping List:"} list={['Eggs','Bread']}/>
                <DeviceTypeText/>
                <Header>{`Render Props Usage`}</Header>
                <MouseCoordinates/>
            </Container>
        );
    }
}

export {PracticeAdvancedConceptsRoute};