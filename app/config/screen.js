import { Dimensions } from 'react-native';

const viewPortWidth = Dimensions.get('window').width;
const viewPortHeight = Dimensions.get('window').height;
const getBoxCoordinates = boxId => {
  const coords = [
    {
      x: viewPortWidth / 5,
      y: viewPortHeight / 5
    },
    {
      x: viewPortWidth / 2 * 1.2,
      y: viewPortHeight / 5
    },
    {
      x: viewPortWidth / 5,
      y: viewPortHeight / 3 * 1.2
    },
    {
      x: viewPortWidth / 2 * 1.2,
      y: viewPortHeight / 3 * 1.2
    }
  ];
  const result = boxId ? coords[boxId - 1] : coords;
  return result;
};

export { viewPortHeight, viewPortWidth, getBoxCoordinates };
