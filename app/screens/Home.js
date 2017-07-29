import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Operators } from '../components/Operators';
import { Box } from '../components/Box';
import { DropBox } from '../components/DropBox';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <Container backgroundColor={this.props.backgroundColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        <View style={styles.dropContainer}>
          <DropBox>
            <Text>Drop me here!</Text>
          </DropBox>
        </View>
        <Text>hello</Text>
        <View style={styles.draggableContainer}>
          <Box />
        </View>
        <Operators />
      </Container>
    );
  }
}

export default connect()(Home);
