import React, { Component } from 'react';
import { Text, View, Animated, PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';

class Box extends Component {
  state = {
    dragging: false,
    initialTop: 50,
    initialLeft: 50,
    offsetTop: 0,
    offsetLeft: 0
  };

  static propTypes = {
    dropZones: PropTypes.array.isRequired
  };

  panResponder = {};

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
  }

  isDropZone(gesture) {
    const { dropZones } = this.props;
    const isIn = dropZones.some(
      zone =>
        gesture.moveY > zone.layout.y &&
        gesture.moveY < zone.layout.y + zone.layout.height
    );
    return isIn;
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

  handlePanResponderRelease = (e, gestureState) => {
    const { initialTop, initialLeft } = this.state;
    console.log('released...');
    if (this.isDropZone(gestureState)) {
      this.setState({
        showDraggable: false
      });
      console.log('is in!');
    } else {
      this.setState({
        dragging: false,
        initialTop: initialTop,
        initialLeft: initialLeft,
        offsetTop: 0,
        offsetLeft: 0
      });
    }
  };

  handlePanResponderEnd = () => true;

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
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[styles.square, style]}
        >
          <Text style={styles.text}>DRAG ME</Text>
        </Animated.View>
      </View>
    );
  }
}

const select = state => ({
  dropZones: state.interactions.dropZones
});

export default connect(select)(Box);
