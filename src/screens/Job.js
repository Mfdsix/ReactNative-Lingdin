import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Job';
import Colors from '../values/Colors';

import JOBS from '../data/Job';

export default function Job({navigation}) {
  return (
    <View style={[Styles.full, Styles.bg]}>
      <Header />
      <ScrollView style={Styles.full}>
        <View style={Styles.pd2}>
          {JOBS.map((job, index) => (
            <View key={index} style={Styles.mb3}>
              <View style={[Styles.flexRow, Styles.flexBetween, Styles.mb2]}>
                <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
                  {job.title}
                </Text>
                <Text style={[Styles.textPrimary]}>See all</Text>
              </View>
              {job.items.map((item, index2) => (
                <View
                  key={index2}
                  style={[Styles.flexBetween, Styles.flexRow, Styles.mb2]}>
                  <Image
                    style={ScreenStyles.companyImage}
                    source={{uri: item.image}}
                  />
                  <View style={[Styles.full, Styles.mh1]}>
                    <Text style={[Styles.textDark, Styles.textBold]}>
                      {item.job}
                    </Text>
                    <Text style={Styles.textDark}>
                      {item.company}{' '}
                      <Text style={Styles.textGrey}>
                        • {item.isPromotion ? 'Promoted' : item.postTime}
                      </Text>
                    </Text>
                    <Text style={[Styles.textGrey, Styles.textSm, Styles.mb1]}>
                      {item.address}
                    </Text>
                    {item.applicants > 0 && item.applicants > 0 && (
                      <Text
                        style={[
                          Styles.textPrimary,
                          Styles.textSm,
                          Styles.textBold,
                        ]}>
                        {item.applicants} applicants
                      </Text>
                    )}
                  </View>
                  <Icon
                    color={item.isLiked ? Colors.BLUE : Colors.GREY}
                    name={item.isLiked ? 'heart' : 'heart-outline'}
                    type="ionicon"
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} active={4} />
    </View>
  );
}
