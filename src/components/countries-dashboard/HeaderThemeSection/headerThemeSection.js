import React from 'react';
import shallowEqual from '../../../../node_modules/@babel/types/lib/utils/shallowEqual.js';
import {HeaderContainer,Theme,H3,Span} from './styledComponent.js';

class HeaderThemeSection extends React.Component{
    
    shouldComponentUpdate(nextProps,nextState){
        return !shallowEqual(this.props,nextProps);
    }
    
    render() {
        console.log("header render");
        const {selectedTheme,changeTheme,className,color} = this.props;
        return (
            <HeaderContainer color={color} className={className}>
                <H3>Where in the world?</H3>
                <Theme>
                    <Span><i className="fa fa-moon-o"></i></Span>
                    <Span onClick={changeTheme}>{selectedTheme}</Span>
                </Theme>
            </HeaderContainer>
        );
    }
}

export default HeaderThemeSection;