import React from 'react';

import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render(){
        return (
            <div className="components-folder">
                <Link to="/form-components" className="component-link"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
                <h2 className="heading">Form Components</h2>
            </div>
        );
    }
}

export {NavBar};