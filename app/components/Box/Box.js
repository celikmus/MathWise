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
      initialTop: props.initCoords[props.boxId].y,
      initialLeft: props.initCoords[props.boxId].x,
      offsetTop: 0,
      offsetLeft: 0
    };
  }

  static propTypes = {
    dropZones: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    vacatingZoneId: PropTypes.string,
    boxId: PropTypes.number,
    initCoords: PropTypes.array
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
    if (this.props.restarting) {
      const { initCoords, boxId } = this.props;
      this.setState({
        initialTop: initCoords[boxId].y,
        initialLeft: initCoords[boxId].x
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
      !vacatingZoneId && dispatch(setVacatingZone(zone.zoneId));
      this.setState({
        dragging: true,
        offsetTop: gestureState.dy,
        offsetLeft: gestureState.dx
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
        initialTop: this.props.initCoords[this.props.boxId].y,
        initialLeft: this.props.initCoords[this.props.boxId].x,
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
  initCoords: state.interactions.initCoords,
  restarting: state.interactions.restarting,
  dropZones: state.interactions.dropZones,
  vacatingZoneId: state.interactions.vacatingZoneId
});

export default connect(select)(Box);
