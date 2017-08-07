import React, { Component } from 'react';
import { Text, View, Animated, PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addOperand,
  removeOperand,
  setVacatingZone
} from '../../actions/interactions';
import styles from './styles';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      showDraggable: true,
      offsetTop: 0,
      offsetLeft: 0
    };
    this.initialTop = props.coords ? props.coords.y : styles.$initialTop;
    this.initialLeft = props.coords ? props.coords.x : styles.$initialLeft;
  }

  static propTypes = {
    dropZones: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    coords: PropTypes.object,
    vacatingZoneId: PropTypes.string
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
        gesture.moveY > z.layout.y - styles.$boxBuffer &&
        gesture.moveY < z.layout.y + styles.$boxBuffer + z.layout.height &&
        gesture.moveX > z.layout.x - styles.$boxBuffer &&
        gesture.moveX < z.layout.x + styles.$boxBuffer + z.layout.width
    );
    return zone;
  }

  handleStartShouldSetPanResponder = () => true;

  handlePanResponderGrant = (evt, gesture) => {
    this.setState({ dragging: true });
  };

  handlePanResponderMove = (e, gestureState) => {
    const zone = this.getDropZone(gestureState);
    zone && this.props.dispatch(setVacatingZone(zone.zoneId));
    this.setState({
      showDraggable: true,
      dragging: true,
      initialTop: this.initialTop,
      initialLeft: this.initialLeft,
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx
    });
  };

  handlePanResponderRelease = (e, gesture) => {
    const zone = this.getDropZone(gesture);
    const { vacatingZoneId, dispatch } = this.props;
    if (zone) {
      this.setState({
        dragging: false,
        showDraggable: false,
        initialTop: 0,
        initialLeft: 0,
        offsetTop: zone.layout.y + 20,
        offsetLeft: zone.layout.x
      });
      zone.isEmpty && dispatch(addOperand(zone.zoneId, this.props.value));
    } else {
      this.setState({
        dragging: false,
        initialTop: this.initialTop,
        initialLeft: this.initialLeft,
        offsetTop: 0,
        offsetLeft: 0
      });
      vacatingZoneId && dispatch(removeOperand(vacatingZoneId));
    }
  };

  handlePanResponderEnd = () => true;

  render() {
    const { dragging, showDraggable, offsetTop, offsetLeft } = this.state;

    const style = {
      backgroundColor: dragging
        ? styles.$draggingBackground
        : styles.$backgroundColor,
      top: showDraggable ? this.initialTop + offsetTop : -100 + offsetTop / 2,
      left: showDraggable ? this.initialLeft + offsetLeft : offsetLeft
    };

    return (
      <View>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[styles.square, style]}
        >
          <Text style={styles.text}>
            {this.props.value}
          </Text>
        </Animated.View>
        {!showDraggable && <View style={styles.emptySquare} />}
      </View>
    );
  }
}

const select = state => ({
  dropZones: state.interactions.dropZones,
  vacatingZoneId: state.interactions.vacatingZoneId
});

export default connect(select)(Box);
