import React from 'react';
import AuthenticationPage from './AuthenticationPage';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Authentication Page',
  component: AuthenticationPage,
  decorators: [withKnobs],
};

export const AuthenticationPageDemo = () => (
  <AuthenticationPage
    backendTest={true}
    backendTestProgress={boolean('Is loading', false)}
  ></AuthenticationPage>
);
