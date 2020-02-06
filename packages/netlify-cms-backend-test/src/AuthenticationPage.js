import React from 'react';
import PropTypes from 'prop-types';
import { AuthenticationPage } from 'netlify-cms-ui-default';

export default class AuthenticationPageBackendTest extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    inProgress: PropTypes.bool,
    config: PropTypes.object.isRequired,
  };

  componentDidMount() {
    /**
     * Allow login screen to be skipped for demo purposes.
     */
    const skipLogin = this.props.config.backend.login === false;
    if (skipLogin) {
      this.props.onLogin(this.state);
    }
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
  };

  render() {
    const { inProgress } = this.props;

    return (
      <AuthenticationPage
        backendTest={true}
        backendTestProgress={inProgress}
        backendTestLogin={this.handleLogin}
      ></AuthenticationPage>
    );
  }
}
