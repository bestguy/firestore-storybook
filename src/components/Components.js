import React from 'react';
import { observer } from 'mobx-react';
import { Container } from 'reactstrap';
import Component from './Component';

@observer
export default class Components extends React.Component {
  render() {
    const { components } = this.props;

    return (
      <Container fluid>
        {components.docs.map(doc => (
          <div className="py-3">
            <Component
              key={doc.data.id}
              name={doc.data.name}
              description={doc.data.description}
              onName={name => doc.update({ name })}
              onDescription={description => doc.update({ description })}
            />
            <hr />
          </div>
        ))}
      </Container>
    );
  }
}

