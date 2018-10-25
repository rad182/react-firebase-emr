import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../lib/firebase';

export default function requireAuth(Component) {
  class RequireAuth extends PureComponent {
    state = {
      isLoading: true,
      isAuthenticated: false,
    };

    componentDidMount = () => {
      this.firebaseAuthState = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log({ user });
          this.setState({ isAuthenticated: true, isLoading: false });
        } else {
          // No user is signed in.
          this.setState({ isAuthenticated: false, isLoading: false });
        }
      });
    };

    componentWillUnmount = () => {
      this.firebaseAuthState(); // unsubscribe
    };

    render() {
      const { isLoading, isAuthenticated } = this.state;

      if (isLoading) return null;
      if (!isAuthenticated) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  return RequireAuth;
}
