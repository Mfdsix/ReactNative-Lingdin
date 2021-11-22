import {StyleSheet, Dimensions} from 'react-native';

const dim = Dimensions.get('window');

export default StyleSheet.create({
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  postImage: {
    width: dim.width,
    height: 320,
    resizeMode: 'cover',
  },
  buttonPad: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
