import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

import JOBS from "../data/Job";

export default function Job({ navigation }){
    return <View>
        <Header/>
        <ScrollView>
            { JOBS.map((job, index) => (
                <View key={index}>
                    <View>
                        <Text>{ job.title }</Text>
                        <Text>See all</Text>
                    </View>
                    { job.items.map((item, index2) => (
                        <View key={index2}>
                            <Image source={{uri: item.image}}/>
                            <View>
                                <Text>{item.job}</Text>
                                <Text>{item.company} <Text>• { item.isPromotion ? "Promoted" : item.postTime }</Text></Text>
                                <Text>{ item.address }</Text>
                                {  item.applicants && item.applicants > 0 &&  <Text>{ item.applicants }</Text> }
                            </View>
                            <Icon name="heart-outline" type="ionicon"/>
                        </View>
                    )) }
                </View>
            )) }
        </ScrollView>
        <BottomNavigation navigation={navigation} active={4}/>
    </View>
}