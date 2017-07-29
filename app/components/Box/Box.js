import React, { Component } from 'react';
import { Text, View, PanResponder } from 'react-native';
import styles from './styles';

class Box extends Component {
  state = {
    dragging: false,
    initialTop: 50,
    initialLeft: 50,
    offsetTop: 0,
    offsetLeft: 0
  };

  panResponder = {};

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
  }

  handleStartShouldSetPanResponder = () => true;

  handlePanResponderGrant = () => {
    this.setState({ dragging: true });
  };

  handlePanResponderMove = (e, gestureState) => {
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx
    });
  };

  handlePanResponderEnd = (e, gestureState) => {
    const { initialTop, initialLeft } = this.state;
    this.setState({
      dragging: false,
      initialTop: initialTop + gestureState.dy,
      initialLeft: initialLeft + gestureState.dx,
      offsetTop: 0,
      offsetLeft: 0
    });
  };

  render() {
    const {
      dragging,
      initialTop,
      initialLeft,
      offsetTop,
      offsetLeft
    } = this.state;

    const style = {
      backgroundColor: dragging
        ? styles.$draggingBackground
        : styles.$backgroundColor,
      top: initialTop + offsetTop,
      left: initialLeft + offsetLeft
    };

    return (
      <View style={styles.container}>
        <View {...this.panResponder.panHandlers} style={[styles.square, style]}>
          <Text style={styles.text}>DRAG ME</Text>
        </View>
      </View>
    );
  }
}

export default Box;
