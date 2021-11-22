import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { userImage } from "../values/Assets";

export default function Header(props){
    return <View>
        { !props.usePhoto && <View><Image source={ { uri: userImage } }/></View> }
        <View>
            <Icon name="search-outline" type="ionicon"/>
            <Text>search for...</Text>
        </View>
        { !props.useNotification && <View><Icon name="notifications-outline" type="ionicon"/></View> }
    </View>
}