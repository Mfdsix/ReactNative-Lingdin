import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
// import Video from 'react-native-video';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import POSTS from '../data/Post';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Home';
import Colors from '../values/Colors';

function PostItem(props) {
  const post = props.post;

  if (post.media && post.mediaType == 'image') {
    return (
      <View style={Styles.mb1}>
        <Image style={ScreenStyles.postImage} source={{uri: post.media}} />
      </View>
    );
  }
  // if (post.media && post.mediaType == 'video') {
  //   return (
  //     <View>
  //       <Video
  //         source={{uri: post.media}}
  //         ref={ref => {
  //           this.player = ref;
  //         }}
  //       />
  //     </View>
  //   );
  // }
  return <View />;
}

function PostPromotion(props) {
  const promotion = props.promotion;

  return (
    <View style={Styles.mb1}>
      <Image style={ScreenStyles.postImage} source={{uri: promotion.media}} />
      <View
        style={[Styles.bgGrey, Styles.pd1, Styles.flexRow, Styles.flexBetween]}>
        <View>
          <Text style={[Styles.textDark, Styles.textBold, Styles.textSm]}>
            {promotion.title}
          </Text>
          <Text style={[Styles.textGrey, Styles.textSm]}>{promotion.link}</Text>
        </View>
        <View
          style={[
            Styles.bdPrimary,
            Styles.ml1,
            Styles.bdRad1,
            ScreenStyles.buttonPad,
            Styles.flexCenter,
          ]}>
          <Text style={[Styles.textPrimary, Styles.textSm]}>
            {promotion.ctaLabel}
          </Text>
        </View>
      </View>
    </View>
  );
}

const REACTIONS = [
  {
    icon: 'thumbs-up-outline',
    title: 'Like',
  },
  {
    icon: 'chatbubble-outline',
    title: 'Comment',
  },
  {
    icon: 'share-social-outline',
    title: 'Share',
  },
  {
    icon: 'send-outline',
    title: 'Send',
  },
];

export default function Home({navigation}) {
  return (
    <View style={[Styles.full, Styles.bg]}>
      <Header />
      <ScrollView style={[Styles.full, Styles.bgGrey]}>
        {/*  */}
        <View style={[Styles.mv1]}>
          {POSTS.map((post, index) => (
            <View key={index} style={[Styles.mb1, Styles.pv2, Styles.bg]}>
              {/* post header */}
              <View
                style={[
                  Styles.flexRow,
                  Styles.flexBetween,
                  Styles.mb1,
                  Styles.ph2,
                ]}>
                <Image
                  style={ScreenStyles.userImage}
                  source={{uri: post.userImage}}
                />
                <View style={[Styles.full, Styles.mh1]}>
                  <Text style={[Styles.textDark, Styles.textBold]}>
                    {post.user}{' '}
                    <Text
                      style={[
                        Styles.textGrey,
                        Styles.textNormal,
                        Styles.textSm,
                      ]}>
                      {' '}
                      • {post.isPromotion ? 'Promoted' : post.postTime}
                    </Text>
                  </Text>
                  <Text style={[Styles.textGrey, Styles.textSm]}>
                    {post.headline}
                  </Text>
                </View>
                <Icon name="ellipsis-vertical-outline" type="ionicon" />
              </View>
              {/* post body */}
              {post.caption && (
                <View style={[Styles.mb1, Styles.ph2]}>
                  <Text style={Styles.textDark}>{post.caption}</Text>
                </View>
              )}
              {post.media && <PostItem post={post} />}
              {post.isPromotion && post.promotion && (
                <PostPromotion promotion={post.promotion} />
              )}

              {/* reaction and comment */}
              <View
                style={[
                  Styles.flexRow,
                  Styles.alignCenter,
                  Styles.flexBetween,
                  Styles.ph2,
                ]}>
                <View style={[Styles.flexRow, Styles.alignCenter]}>
                  <Icon
                    size={16}
                    color={Colors.BLUE}
                    name="thumbs-up"
                    type="ionicon"
                  />
                  <Icon
                    size={16}
                    color={Colors.YELLOW}
                    name="happy"
                    type="ionicon"
                  />
                  <Text style={[Styles.textGrey, Styles.textSm, Styles.ml1]}>
                    {post.reactions} reactions
                  </Text>
                </View>
                {post.comments > 0 && (
                  <Text style={[Styles.textGrey, Styles.textSm]}>
                    {post.comments} comments
                  </Text>
                )}
                {post.comments <= 0 && (
                  <Text style={[Styles.textGrey, Styles.textSm]}>
                    no comments
                  </Text>
                )}
              </View>

              {/* reaction button */}
              <View
                style={[
                  Styles.flexRow,
                  Styles.flexBetween,
                  Styles.alignCenter,
                  Styles.pv1,
                  Styles.ph3,
                  Styles.mt1,
                ]}>
                {REACTIONS.map((reaction, index) => (
                  <View key={index}>
                    <Icon
                      color={
                        index == 0 && post.isLiked ? Colors.BLUE : Colors.GREY
                      }
                      name={
                        index == 0 && post.isLiked ? 'thumbs-up' : reaction.icon
                      }
                      type="ionicon"
                    />
                    <Text
                      style={[
                        Styles.textGrey,
                        Styles.textSm,
                        index == 0 && post.isLiked ? Styles.textPrimary : {},
                      ]}>
                      {reaction.title}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} active={0} />
    </View>
  );
}
