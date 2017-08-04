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
    this.zoneId = `DropZone-${Math.random().toString(16).substring(7)}`;
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  setDropZoneValues = event => {
    const { dispatch } = this.props;
    dispatch(addDropZone(this.zoneId, event.nativeEvent.layout));
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
