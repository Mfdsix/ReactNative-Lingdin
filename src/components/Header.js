import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import Colors from '../values/Colors';

import {userImage} from '../values/Assets';

export default function Header(props) {
  return (
    <View
      style={[
        Styles.flexRow,
        Styles.flexBetween,
        Styles.alignCenter,
        Styles.pd2,
      ]}>
      {!props.usePhoto && (
        <View style={[Styles.mr1]}>
          <Image style={HeaderStyles.roundImage} source={{uri: userImage}} />
        </View>
      )}
      <View
        style={[
          Styles.bgGrey,
          Styles.pd1,
          Styles.flexRow,
          Styles.full,
          Styles.bdRad1,
          Styles.alignCenter,
        ]}>
        <Icon
          style={[Styles.mr1]}
          color={Colors.GREY}
          name="search-outline"
          type="ionicon"
        />
        <Text style={Styles.textGrey}>Search for...</Text>
      </View>
      {!props.useNotification && (
        <View style={[Styles.ml1, Styles.bgPrimary, Styles.pd1, Styles.bdRad1]}>
          <Icon
            color={Colors.WHITE}
            name="notifications-outline"
            type="ionicon"
          />
        </View>
      )}
    </View>
  );
}

const HeaderStyles = StyleSheet.create({
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
