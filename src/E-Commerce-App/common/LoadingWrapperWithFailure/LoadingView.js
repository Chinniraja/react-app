import React from "react";

// import Loader from "../Icons/Loader";
import Loader from 'react-loader-spinner';
import { LoadingViewContainer } from "./styledComponents";

class LoadingView extends React.Component {
  render() {
    return (
      <LoadingViewContainer>
        <Loader type="ThreeDots" color="black"/>
      </LoadingViewContainer>
    );
  }
}

export default LoadingView;
