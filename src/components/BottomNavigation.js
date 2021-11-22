import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const MENU_ITEMS = [
    {
        icon: 'home-outline',
        title: 'Home',
        destination: "Home",
    },
    {
        icon: 'link-outline',
        title: 'Network'
    },
    {
        icon: 'add-circle-outline',
        title: 'Post'
    },
    {
        icon: 'chatbubble-ellipses-outline',
        title: 'Chat'
    },
    {
        icon: 'briefcase-outline',
        title: 'Jobs',
        destination: "Job",
    },
];

export default function BottomNavigation(props){
    return <View>
        { MENU_ITEMS.map((item, index) => (
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={ () => (item.destination) ? props.navigation.navigate(item.destination) : false}>
            <View key={index}>
                <Icon name={ item.icon } type="ionicon"/>
                <Text>{ item.title }</Text>
            </View>
            </TouchableOpacity>
        )) }
    </View>
}