import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { auth } from '../src/api/auth';
import { getComponent } from '../src/stores/ComponentStore';
import Component from '../src/components/Component';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

class PageDecorator extends React.Component {
  state = {
    loggedIn: false
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ loggedIn: user ? user : null });
    });
  }

  render() {
    const { info, story } = this.props;
    const component = getComponent(info.kind);
    return (
      <div className="p-4">
        <div>
          {this.state.loggedIn && <i className="fa fa-pencil fa-lg" />}
          {component.data && <Component component={component} />}
        </div>
        {story()}
      </div>
    );
  }
}

addDecorator((story, info) => <PageDecorator story={story} info={info} />);

configure(loadStories, module);