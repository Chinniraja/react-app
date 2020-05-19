import React,{Component} from 'react';

const withScreenSizeDetectors = function(WrappedComponent) {
    return class extends Component {
        
        isMobile = () => {
            if(window.innerWidth < 576) {
                return true;
            }
            return false;
        }
        
        isTablet = () => {
            if(window.innerWidth >= 576 && window.innerWidth < 992) {
                return true;
            }
            return false;
        }
        
        isDesktop = () => {
            if(window.innerWidth >= 992) {
                return true;
            }
            return false;
        }
        
        render() {
            return (
                <WrappedComponent isMobile={this.isMobile} isTablet={this.isTablet} isDesktop={this.isDesktop}/>    
            );
        }
    };
};

export default withScreenSizeDetectors;