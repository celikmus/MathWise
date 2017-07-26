import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

class Home extends Component {
  render() {
    return (
      <Container backgroundColor={this.props.backgroundColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        <Text>hello</Text>
      </Container>
    );
  }
}

export default connect()(Home);
