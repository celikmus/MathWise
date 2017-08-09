import { Dimensions } from 'react-native';

const viewPortWidth = Dimensions.get('window').width;
const viewPortHeight = Dimensions.get('window').height;
const isPortrait = viewPortWidth < viewPortHeight;

const getBoxCoordinates = boxId => {
  let viewPortWidth = Dimensions.get('window').width;
  let viewPortHeight = Dimensions.get('window').height;
  let isPortrait = viewPortWidth < viewPortHeight;
  const coords = isPortrait
    ? [
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
      ]
    : [
        {
          x: viewPortWidth / 20,
          y: viewPortHeight / 6
        },
        {
          x: viewPortWidth / 4,
          y: viewPortHeight / 6
        },
        {
          x: viewPortWidth / 4 * 2,
          y: viewPortHeight / 6
        },
        {
          x: viewPortWidth / 4 * 3,
          y: viewPortHeight / 6
        }
      ];
  const result = boxId ? coords[boxId - 1] : coords;
  return result;
};

export { viewPortHeight, viewPortWidth, getBoxCoordinates };
