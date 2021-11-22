import {StyleSheet} from 'react-native';
import Colors from '../values/Colors';

export default StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  boardDivider: {
    width: 0.3,
    marginHorizontal: 15,
    height: 70,
    backgroundColor: Colors.GREY,
  },
  activityImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
