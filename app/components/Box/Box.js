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
    this.initTop = props.coords ? props.coords.y : styles.$initialTop;
    this.initLeft = props.coords ? props.coords.x : styles.$initialLeft;
    this.state = {
      dragging: false,
      initialTop: this.initTop,
      initialLeft: this.initLeft,
      offsetTop: 0,
      offsetLeft: 0
    };
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

  componentWillUpdate() {
    if (this.props.resetting) {
      this.setState({
        initialTop: this.initTop,
        initialLeft: this.initLeft
      });
    }
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
    const { vacatingZoneId, dispatch } = this.props;
    if (zone && !zone.isEmpty) {
      // TODO: Box disappearing when hovered over a filled zone...
      !vacatingZoneId && dispatch(setVacatingZone(zone.zoneId));
      this.setState({
        dragging: true,
        offsetTop: gestureState.moveY,
        offsetLeft: gestureState.moveX
      });
    } else {
      // done --> drag to anywhere
      this.setState((prevState, props) => ({
        dragging: true,
        offsetTop: gestureState.dy,
        offsetLeft: gestureState.dx
      }));
    }
  };

  handlePanResponderRelease = (e, gesture) => {
    const zone = this.getDropZone(gesture);
    const hasMoved = gesture.dx || gesture.dy;
    const { vacatingZoneId, dispatch } = this.props;
    if (zone && hasMoved && zone.isEmpty) {
      this.setState(() => ({
        dragging: false,
        initialTop: zone.layout.y - styles.$containerHeight,
        initialLeft: zone.layout.x,
        offsetTop: 0,
        offsetLeft: 0
      }));
      dispatch(addOperand(zone.zoneId, this.props.value));
    } else {
      // done --> put back to init place
      this.setState({
        dragging: false,
        initialTop: this.initTop,
        initialLeft: this.initLeft,
        offsetTop: 0,
        offsetLeft: 0
      });
      vacatingZoneId && dispatch(removeOperand(vacatingZoneId));
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
      <View>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[styles.square, style]}
        >
          <Text style={styles.text}>
            {this.props.value}
          </Text>
        </Animated.View>
        {/* {<View style={[style, styles.emptySquare]} />} */}
      </View>
    );
  }
}

const select = state => ({
  resetting: state.interactions.resetting,
  dropZones: state.interactions.dropZones,
  vacatingZoneId: state.interactions.vacatingZoneId
});

export default connect(select)(Box);
