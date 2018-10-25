import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RedirectAs404 = ({ location }) => (
  <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
);

RedirectAs404.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default RedirectAs404;
