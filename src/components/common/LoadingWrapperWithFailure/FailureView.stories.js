/*global boolean*/
import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs/react'

// import '../../../styles/tailwind.css'
import FailureView from './FailureView'
import Loader from "../Icons/Loader";

export default {
   component: FailureView,
   title: 'Common/FailureView',
}

// export const defaultView = () => <FailureView />
// export const loader = () => <Loader/>

export const withOnRetryAndErrorMessageProp = () => (
   <FailureView
      onRetryClick={action('retry clicked')}
      errorMessage={'Failed'}
   />
)

export const knobs = () => (
   <FailureView
      fill={color("fill","#282823c")}
      errorMessage={text('errorMessage', 'failed message')}
      onRetryClick={action('retry clicked')}
   />
)

export const loaderFn = () => (
   <Loader
      fill={color("fill","green")}
   />
)

loaderFn.story = {
   decorators: [withKnobs]
}

knobs.story = {
   decorators: [withKnobs]
}
