import { Dimensions } from 'react-native';

const viewPortWidth = Dimensions.get('window').width;
const viewPortHeight = Dimensions.get('window').height;

const boxCoordinates = [
  {
    x: 60,
    y: 200
  },
  {
    x: 200,
    y: 200
  },
  {
    x: 60,
    y: 300
  },
  {
    x: 200,
    y: 300
  }
];

export { viewPortHeight, viewPortWidth, boxCoordinates };
