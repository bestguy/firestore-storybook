import React from 'react';
import { Col, Row } from 'reactstrap';
import { observer } from 'mobx-react';
import { getComponent } from '../stores/ComponentStore';
import Component from './Component';
import User from './User';

@observer
export default class SignInForm extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={3} className="bg-secondary px-2 py-4">
            <User />
          </Col>
          <Col sm={9}>
            <Component component={getComponent('Alert')} />
          </Col>
        </Row>
      </div>
    );
  }
}
