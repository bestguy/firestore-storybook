import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { getComponent } from '../src/stores/ComponentStore';
import Component from '../src/components/Component';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Alert', module)
  .add('with text', () => (
    <div>
      <Button onClick={action('clicked')}>Hello Button</Button>
      <Component component={getComponent('Alert')} />
    </div>
  ));
