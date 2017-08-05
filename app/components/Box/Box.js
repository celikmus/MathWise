import React, { Component } from 'react';
import { Text, View, Animated, PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addOperand } from '../../actions/interactions';
import styles from './styles';

class Box extends Component {
  state = {
    dragging: false,
    showDraggable: true,
    initialTop: 50,
    initialLeft: 50,
    offsetTop: 0,
    offsetLeft: 0
  };

  static propTypes = {
    dropZones: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired
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

  getDropZone(gesture) {
    const { dropZones } = this.props;
    const zone = dropZones.find(
      z =>
        z.isEmpty &&
        gesture.moveY > z.layout.y - styles.$boxBuffer &&
        gesture.moveY < z.layout.y + styles.$boxBuffer + z.layout.height &&
        gesture.moveX > z.layout.x - styles.$boxBuffer &&
        gesture.moveX < z.layout.x + styles.$boxBuffer + z.layout.width
    );
    return zone;
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

  handlePanResponderRelease = (e, gesture) => {
    const { initialTop, initialLeft } = this.state;
    const zone = this.getDropZone(gesture);
    if (zone) {
      this.setState({
        showDraggable: false
      });
      this.props.dispatch(addOperand(zone.zoneId, this.props.value));
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
      showDraggable,
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
        {showDraggable
          ? <Animated.View
              {...this.panResponder.panHandlers}
              style={[styles.square, style]}
            >
              <Text style={styles.text}>
                {this.props.value}
              </Text>
            </Animated.View>
          : null}
      </View>
    );
  }
}

const select = state => ({
  dropZones: state.interactions.dropZones
});

export default connect(select)(Box);
