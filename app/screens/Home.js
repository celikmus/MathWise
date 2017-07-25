import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/Container';

class Home extends Component {
  render() {
    return (
      <Container backgroundColor={this.props.backgroundColor}>
        <Text>hello</Text>
      </Container>
    );
  }
}

export default connect()(Home);
