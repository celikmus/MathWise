import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import styles from './styles';
import { addDropZone } from '../../actions/interactions';

class DropBox extends Component {
  constructor() {
    super();
    this.setDropZoneValues = this.setDropZoneValues.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    zoneId: PropTypes.number.isRequired
  };

  setDropZoneValues = event => {
    const { dispatch, zoneId } = this.props;
    dispatch(addDropZone(zoneId, event.nativeEvent.layout));
  };

  render() {
    return (
      <View style={styles.square} onLayout={this.setDropZoneValues}>
        <Text style={styles.text}>Drop here</Text>
      </View>
    );
  }
}

export default connect()(DropBox);
