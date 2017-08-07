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
    dispatch: PropTypes.func.isRequired,
    zones: PropTypes.array.isRequired
  };

  setDropZoneValues = event => {
    const { dispatch, zones } = this.props;
    const alreadyCreated = zones.some(z => z.zoneId === this.zoneId);
    !alreadyCreated &&
      dispatch(addDropZone(this.zoneId, event.nativeEvent.layout));
  };

  render() {
    const zone = this.props.zones.find(z => z.zoneId === this.zoneId) || {};
    const viewStyle = zone.isEmpty
      ? [styles.square]
      : [styles.square, styles.filled];
    return (
      <View style={viewStyle} onLayout={this.setDropZoneValues}>
        {zone.isEmpty
          ? <Text style={styles.text}>Drop here</Text>
          : <Text style={[styles.text, styles.filledText]}>
              {zone.value}
            </Text>}
      </View>
    );
  }
}

const select = state => ({
  zones: state.interactions.dropZones || []
});

export default connect(select)(DropBox);
