import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';

import React from 'react';
import addons from '@storybook/addons';
import { Helmet } from 'react-helmet';
import User from '../src/components/User';

addons.register('kadira/notes', (api) => {
  addons.addPanel('kadira/notes/panel', {
    title: 'Login',
    render: () => (
      <div className="text-center p-3 w-100">
        <Helmet>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/cosmo/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />  
        </Helmet>
        <User />
      </div>
    ),
  })
})