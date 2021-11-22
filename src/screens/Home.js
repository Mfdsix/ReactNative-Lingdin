import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Video from 'react-native-video';

import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

import POSTS from "../data/Posts";

function PostItem(props){
    const post = props.post;

    if(post.media && post.mediaType == "image"){
        return <View>
            <Image source={{ uri: post.media }}/>
        </View>
    }
    if(post.media && post.mediaType == "video"){
        return <View>
            <Video source={{uri: post.media}}
            ref={(ref) => {
            this.player = ref
        }}/>
        </View>
    }
    return null;
}

function PostPromotion(props){
    const promotion = props.promotion;

    return <View>
        <Image source={{ uri: promotion.media}}/>
        <View>
            <View>
                <Text>{ promotion.title }</Text>
                <Text>{ promotion.link }</Text>
            </View>
            <View>
                <Text>{ promotion.ctaLabel }</Text>
            </View>
        </View>
    </View>
}

const REACTIONS = [
    {
        icon: 'thumbs-up-outline',
        title: 'Like'
    },
    {
        icon: 'chatbubble-outline',
        title: 'Comment'
    },
    {
        icon: 'share-social-outline',
        title: 'Share'
    },
    {
        icon: 'send-outline',
        title: 'Send'
    },
];

export default function Home({ navigation }){
    return <View>
        <Header/>
        <ScrollView>
            {/*  */}
            <View>
                { POSTS.map((post, index) => (
                    <View key={index}>
                        <View>
                            <Image source={{uri: post.userImage}}/>
                            <View>
                                <Text>{ post.user } <Text> • { ( post.isPromotion ) ? "Promoted" : post.postTime }</Text></Text>
                                <Text>{ post.headline }</Text>
                            </View>
                            <Icon name="ellipsis-vertical-outline" type="ionicon"/>
                        </View>
                        
                        { post.caption && <View>{ post.caption }</View>}
                        { post.media && <PostItem post={ post }/>}
                        { post.isPromotion && post.promotion && <PostPromotion promotion={post.promotion}/>}

                        {/* reactin and comment */}
                        <View>
                            <View>
                                <Icon name="thumbs-up" type="ionicon"/>
                                <Text>{ post.reactions } reactins</Text>
                            </View>
                            <Text>{ post.comments } comments</Text>
                        </View>

                        {/* reaction button */}
                        <View>
                            { REACTIONS.map((reaction, index) => (
                                <View key={index}>
                                    <Icon name={ reaction.icon } type="ionicon"/>
                                    <Text>{ reaction.title }</Text>
                                </View>
                            )) }
                        </View>

                    </View>
                )) }
            </View>
            {/*  */}
        </ScrollView>
        <BottomNavigation navigation={navigation} active={0}/>
    </View>
}