import React from 'react';
import { Input } from 'reactstrap';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import Markdown from './Markdown';

@observer
export default class Component extends React.Component {
  @observable editing = false;

  @action
  toggle() {
    this.editing = !this.editing;
  }

  render() {
    const { component } = this.props;
    const { name, description } = component.data;

    return (
      <div>
        <h2>
          {this.editing ? (
            <Input
              onBlur={() => this.toggle()}
              onChange={e => component.update({ name: e.target.value })}
              value={name}
            />
          ) : (
            <span onClick={() => this.toggle()}>
              {name}
            </span>
          )}
        </h2>
        {this.editing ? (
          <div>
            <Input
              type="textarea"
              onBlur={() => this.toggle()}
              onChange={e => component.update({ description: e.target.value })}
              value={description}
              rows={description.split('\n').length + 3}
            />
          </div>
        ) : (
          <Markdown
            onClick={() => this.toggle()}
            text={description}
          />
        )}
      </div>
    );
  }
}
