import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Header from '../components/Header';

import USER from '../data/User';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Profile';
import Colors from '../values/Colors';

export default function Profile() {
  return (
    <View style={[Styles.full, Styles.bg]}>
      <Header usePhoto={false} useNotification={false} />
      <ScrollView style={Styles.full}>
        <View style={Styles.pd2}>
          {/* user */}
          <View style={[Styles.flexRow, Styles.flexBetween]}>
            <Image style={ScreenStyles.userImage} source={{uri: USER.image}} />
            <View style={[Styles.full, Styles.mh1]}>
              <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
                {USER.name}
              </Text>
              <Text style={[Styles.textGrey, Styles.textSm, Styles.mb1]}>
                {USER.headline}
              </Text>
              <Text style={[Styles.textGrey, Styles.textSm]}>
                {USER.address}
              </Text>
            </View>
            <Icon color={Colors.BLACK} name="create-outline" type="ionicon" />
          </View>
          {/* connections and followers */}
          <View style={Styles.mv2}>
            <Text style={[Styles.textPrimary]}>
              {USER.statistics.followers} Followers •{' '}
              {USER.statistics.connections} Connections
            </Text>
          </View>
          {/* actions */}
          <View
            style={[Styles.flexRow, Styles.alignCenter, Styles.flexBetween]}>
            <View
              style={[
                Styles.pd1,
                Styles.bgPrimary,
                Styles.bdRad1,
                Styles.full,
              ]}>
              <Text style={[Styles.textWhite, Styles.textCenter]}>Open To</Text>
            </View>
            <View
              style={[
                Styles.pd1,
                Styles.bdPrimary,
                Styles.bdRad1,
                Styles.full,
                Styles.mh1,
              ]}>
              <Text style={[Styles.textPrimary, Styles.textCenter]}>
                Add Section
              </Text>
            </View>
            <View style={[Styles.pd1, Styles.bdPrimary, Styles.bdRad1]}>
              <Icon
                color={Colors.BLUE}
                size={16}
                name="ellipsis-horizontal"
                type="ionicon"
              />
            </View>
          </View>
          {/* my board */}
          <View style={Styles.mv2}>
            <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
              My Board
            </Text>
            <Text style={[Styles.textGrey, Styles.textSm]}>
              only you can see this
            </Text>
            <View
              style={[
                Styles.mv1,
                Styles.bgSmoke,
                Styles.bdRad1,
                Styles.flexRow,
                Styles.flexBetween,
                Styles.pv2,
                Styles.ph1,
              ]}>
              <View style={[Styles.alignCenter, Styles.full]}>
                <Text
                  style={[Styles.textPrimary, Styles.textBold, Styles.textXl]}>
                  {USER.statistics.views}
                </Text>
                <Text
                  style={[Styles.textGrey, Styles.textSm, Styles.textCenter]}>
                  Profile visitor count
                </Text>
              </View>
              <View style={ScreenStyles.boardDivider} />
              <View style={[Styles.full, Styles.alignCenter]}>
                <Text
                  style={[Styles.textPrimary, Styles.textBold, Styles.textXl]}>
                  {USER.statistics.postViews}
                </Text>
                <Text
                  style={[Styles.textGrey, Styles.textSm, Styles.textCenter]}>
                  People view your post
                </Text>
              </View>
              <View style={ScreenStyles.boardDivider} />
              <View style={[Styles.full, Styles.alignCenter]}>
                <Text
                  style={[Styles.textPrimary, Styles.textBold, Styles.textXl]}>
                  {USER.statistics.searchAppearance}
                </Text>
                <Text
                  style={[Styles.textGrey, Styles.textSm, Styles.textCenter]}>
                  Search appearance
                </Text>
              </View>
            </View>
          </View>
          {/* activities */}
          <View>
            <Text
              style={[
                Styles.textDark,
                Styles.textBold,
                Styles.textMd,
                Styles.mb1,
              ]}>
              My Activity
            </Text>
            {USER.activities.map((activity, index) => (
              <View
                key={index}
                style={[Styles.mb1, Styles.flexRow, Styles.flexBetween]}>
                <Image
                  style={[ScreenStyles.activityImage]}
                  source={{uri: activity.thumbnail}}
                />
                <View style={[Styles.full, Styles.ml1]}>
                  <Text style={[Styles.textDark]}>{activity.headline}</Text>
                  <Text style={[Styles.textGrey, Styles.textSm]}>
                    {activity.reactions} reactions • {activity.comments}{' '}
                    comments
                  </Text>
                </View>
              </View>
            ))}
            <Text style={[Styles.textPrimary, Styles.textCenter, Styles.mv2]}>
              View all activities
            </Text>
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </View>
  );
}
