import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import Header from "../components/Header";

import USER from "../data/User";

export default function Profile(){
    return <View>
        <Header usePhoto={false} useNotification={false}/>
        <ScrollView>
            {/* user */}
            <View>
                <Image source={{uri: USER.image}}/>
                <View>
                    <Text>{ USER.name }</Text>
                    <Text>{ USER.headline }</Text>
                    <Text>{ USER.address }</Text>
                </View>
                <Icon name="create-outline" type="ionicon"/>
            </View>
            {/* connections and followers */}
            <View>
                <Text>{ USER.statistics.followers } Followers • { USER.statistics.connections } Connections</Text>
            </View>
            {/* actions */}
            <View>
                <View>
                    <Text>Open To</Text>
                </View>
                <View>
                    <Text>Add Section</Text>
                </View>
                <View>
                    <Icon name="ellipsis-horizontal-outline" type="ionicon"/>
                </View>
            </View>
            {/* my board */}
            <View>
                <Text>My Board</Text>
                <Text>only you can see this</Text>
                <View>
                    <View>
                        <Text>{ USER.statistics.views }</Text>
                        <Text>Profile visitors</Text>
                    </View>
                    <View/>
                    <View>
                        <Text>{ USER.statistics.postViews }</Text>
                        <Text>Post views</Text>
                    </View>
                    <View/>
                    <View>
                        <Text>{ USER.statistics.searchAppearance }</Text>
                        <Text>Search appearance</Text>
                    </View>
                </View>
            </View>
            {/* activities */}
            <View>
                { USER.activities.map((activity, index) => (
                    <View key={index}>
                        <Image source={{ uri: activity.thumbnail }}/>
                        <View>
                            <Text>{ activity.headline }</Text>
                            <Text>{ activity.reactions } reactions • { activity.comments } comments</Text>
                        </View>
                    </View>
                )) }
            </View>
            {/*  */}
        </ScrollView>
    </View>
}