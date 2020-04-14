import React from 'react';
// import shallowEqual from '../../../../..//portfolio-website/react/my-app/node_modules/@babel/types/lib/utils/shallowEqual';
import {StyledFooterContainer,H1,StyledInstructions} from './styledComponent';
import shallowCompare from 'react-addons-shallow-compare';
class FooterSection extends React.Component{
    shouldComponentUpdate(nextProps,nextState){
        return shallowCompare(this,nextProps,nextState);
    }
    render(){
        const {theme} = this.props;
        return (
            <StyledFooterContainer theme={theme}>
                <H1>How to play?</H1>
                <StyledInstructions>
                    Get points by clicking on an image but don't click on any image more than once!
                </StyledInstructions>
            </StyledFooterContainer>
        );
    }
}

export default FooterSection;