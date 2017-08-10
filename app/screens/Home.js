import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Operators } from '../components/Operators';
import { Box } from '../components/Box';
import { DropBox } from '../components/DropBox';
import { drawNumbers } from '../actions/numbers';
import { reloadGame, changeOperator } from '../actions/interactions';
import { operators } from '../utils/numbers';
import styles from './styles';

const getIconName = operator => {
  switch (operator) {
    case operators.multiply:
      return 'close';
    case operators.sum:
      return 'plus';
    case operators.subtract:
      return 'minus';
    default:
      return operator;
  }
};

class Home extends Component {
  constructor() {
    super();
    this.handleChangeOperator = this.handleChangeOperator.bind(this);
  }

  static propTypes = {
    selectedOperator: PropTypes.string.isRequired,
    result: PropTypes.number,
    options: PropTypes.array
  };

  handleChangeOperator(selectedOperator) {
    const { dispatch } = this.props;
    dispatch(reloadGame(true, selectedOperator));
    dispatch(changeOperator(selectedOperator));
    dispatch(drawNumbers(selectedOperator));
  }

  componentWillMount() {
    const { dispatch, selectedOperator } = this.props;
    dispatch(drawNumbers(selectedOperator));
  }
  renderOptions() {
    const options = this.props.options.map((option, i) =>
      <Box key={i} boxId={i + 1} value={option} />
    );
    return options;
  }
  renderSuccess() {
    const { selectedOperator, dispatch } = this.props;
    setTimeout(() => {
      dispatch(reloadGame(true, selectedOperator));
      dispatch(drawNumbers(selectedOperator));
    }, 1000);
    return <Text>Success!</Text>;
  }
  renderFail() {
    return <Text>Incorrect!</Text>;
  }
  render() {
    return (
      <Container backgroundColor={this.props.backgroundColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        <View style={styles.container}>
          <View style={styles.dropContainer}>
            <DropBox>
              <Text>Drop here!</Text>
            </DropBox>
            <View style={styles.operator}>
              <MaterialCommunityIcons
                name={getIconName(this.props.selectedOperator)}
                color={styles.$iconColor}
                size={styles.$iconSize}
              />
            </View>
            <DropBox>
              <Text>Drop here!</Text>
            </DropBox>
            <View style={styles.operator}>
              <MaterialCommunityIcons
                name={getIconName(operators.equal)}
                color={styles.$iconColor}
                size={styles.$iconSize}
              />
            </View>
            <View style={styles.result}>
              <Text style={styles.resultText}>
                {this.props.result}
              </Text>
            </View>
          </View>
          {this.props.isFilled &&
            <View style={styles.message}>
              {this.props.result === this.props.total
                ? this.renderSuccess()
                : this.renderFail()}
            </View>}
          {this.renderOptions()}
        </View>
        <Operators
          selectedOperator={this.props.selectedOperator}
          changeOperator={o => this.handleChangeOperator(o)}
        />
      </Container>
    );
  }
}

const calculateTotal = (dropZones, operator) => {
  switch (operator) {
    case operators.sum:
      return dropZones.reduce((sum, zone) => sum + (zone.value || 0), 0);
    case operators.subtract:
      return dropZones[1].value - dropZones[0].value;
    default:
      return 0;
  }
};

const select = state => {
  const selectedOperator = state.interactions.selectedOperator;
  const zoneCount = state.interactions.dropZones.length;
  const dropCount = state.interactions.dropCount;
  const isFilled = zoneCount === dropCount;
  const total =
    isFilled && calculateTotal(state.interactions.dropZones, selectedOperator);
  return {
    result: state.numbers.result,
    options: state.numbers.options,
    selectedOperator,
    isFilled,
    total
  };
};

export default connect(select)(Home);
