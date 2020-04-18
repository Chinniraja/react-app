import React from 'react';
import {observer} from 'mobx-react';
import {StyledHeader,StyledLevel,StyledTopLevel,StyledTheme,StyledLevelAndTheme} from './styledComponents';


@observer
class HeaderSection extends React.Component {
    changeTheme = () => {
        const {changeTheme} = this.props;
        changeTheme();
    }
    
    render(){
        const {level,topLevel,selectedTheme} = this.props;
        return (
            <StyledHeader level={level} theme={selectedTheme}>
                <StyledTopLevel>Top Level: {topLevel}</StyledTopLevel>
                <StyledLevelAndTheme level={level}>
                    <StyledLevel>Level: {level}</StyledLevel>
                    <StyledTheme onClick={this.changeTheme} theme={selectedTheme}>Mode: {selectedTheme}</StyledTheme>
                </StyledLevelAndTheme>
            </StyledHeader>
        );
    }
}

export default HeaderSection;