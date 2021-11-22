import {StyleSheet} from 'react-native';
import Colors from '../values/Colors';

export default StyleSheet.create({
  bg: {
    backgroundColor: Colors.WHITE,
  },
  bgPrimary: {
    backgroundColor: Colors.BLUE,
  },
  bgGrey: {
    backgroundColor: Colors.LIGHT_GREY,
  },
  shadow: {
    elevation: 10,
    shadowColor: Colors.GREY,
  },
  full: {
    flex: 1,
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  fixed: {
    position: 'fixed',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexBetween: {
    justifyContent: 'space-between',
  },
  flexAround: {
    justifyContent: 'space-around',
  },
  flexCenter: {
    justifyContent: 'center',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textPrimary: {
    color: Colors.BLUE,
  },
  textDark: {
    color: Colors.BLACK,
  },
  textWhite: {
    color: Colors.WHITE,
  },
  textGrey: {
    color: Colors.GREY,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textNormal: {
    fontWeight: 'normal',
  },
  textSm: {
    fontSize: 12,
  },
  textMd: {
    fontSize: 16,
  },
  textLg: {
    fontSize: 20,
  },
  textXl: {
    fontSize: 28,
  },
  pd1: {
    padding: 10,
  },
  pd2: {
    padding: 20,
  },
  pd3: {
    padding: 30,
  },
  pd4: {
    padding: 40,
  },
  ph1: {
    paddingHorizontal: 10,
  },
  ph2: {
    paddingHorizontal: 20,
  },
  ph3: {
    paddingHorizontal: 30,
  },
  ph4: {
    paddingHorizontal: 40,
  },
  pv1: {
    paddingVertical: 10,
  },
  pv2: {
    paddingVertical: 20,
  },
  pv3: {
    paddingVertical: 30,
  },
  pv4: {
    paddingVertical: 40,
  },
  pr0: {
    paddingRight: 0,
  },
  mg1: {
    margin: 10,
  },
  mg2: {
    margin: 20,
  },
  mg3: {
    margin: 30,
  },
  mg4: {
    margin: 40,
  },
  mh1: {
    marginHorizontal: 10,
  },
  mh2: {
    marginHorizontal: 20,
  },
  mh3: {
    marginHorizontal: 30,
  },
  mh4: {
    marginHorizontal: 40,
  },
  mv1: {
    marginVertical: 10,
  },
  mv2: {
    marginVertical: 20,
  },
  mv3: {
    marginVertical: 30,
  },
  mv4: {
    marginVertical: 40,
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mt4: {
    marginTop: 40,
  },
  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mb4: {
    marginBottom: 40,
  },
  mr1: {
    marginRight: 10,
  },
  mr2: {
    marginRight: 20,
  },
  mr3: {
    marginRight: 30,
  },
  mr4: {
    marginRight: 40,
  },
  ml1: {
    marginLeft: 10,
  },
  ml2: {
    marginLeft: 20,
  },
  ml3: {
    marginLeft: 30,
  },
  ml4: {
    marginLeft: 40,
  },
  bd: {
    borderColor: Colors.LIGHT_GREY,
    borderWidth: 1,
  },
  bdPrimary: {
    borderColor: Colors.BLUE,
    borderWidth: 1,
  },
  bdRad1: {
    borderRadius: 10,
  },
  bdRad2: {
    borderRadius: 20,
  },
  bdRad3: {
    borderRadius: 30,
  },
  textWrap: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
