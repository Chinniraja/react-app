import React,{Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import withScreenSizeDetectors from '../../hocs/withScreenSizeDetectors'; 
import {DeviceTypeTextContainer,StyledLabel,StyledText,StyledTitle,StyledContainer} from './styledComponents';

@observer
class DeviceTypeText extends Component {
    @observable device
    
    componentDidMount() {
        this.onResize();
    }
    
    onResize = () => {
        const {isMobile,isTablet,isDesktop} = this.props;
        if(isMobile()) {
            this.device = 'Mobile';
        }
        else if(isTablet()) {
            this.device = 'Tablet';
        }
        else if(isDesktop()) {
            this.device = 'Desktop';
        }
    }
    render() {
        window.onresize = this.onResize;
        return (
            <DeviceTypeTextContainer>
                <StyledTitle>{`DeviceTypeText`}</StyledTitle>
                <StyledContainer>
                    <StyledLabel>{`Device Type:`}</StyledLabel>
                    <StyledText>{this.device}</StyledText>
                </StyledContainer>
            </DeviceTypeTextContainer>
        );
    }
}

export default withScreenSizeDetectors(DeviceTypeText);