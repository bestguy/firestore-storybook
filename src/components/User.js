import React from 'react';
import { Button } from 'reactstrap';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { auth, signIn, signOut } from '../api/auth';


@observer
export default class User extends React.Component {
  @observable user;

  onSignIn = () => {
    signIn()
      .then(a => console.log('success', a))
      .catch(error => console.error('fail', error));
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => this.user = user ? user : null);
  }

  render() {
    return (
      <div>
        {this.user ? (
          <div className="text-center">
            <img
              width="100"
              className="rounded-circle"
              src={this.user.photoURL}
            />
            <h4>{this.user.displayName}</h4>
            <h5>{this.user.email}</h5>
            <Button color="danger" onClick={() => signOut()}>
              Sign Out
            </Button>
          </div>
        ) : (
          <Button color="primary" onClick={() => this.onSignIn()}>
            Sign In
          </Button>
        )}
      </div>
    );
  }
}
