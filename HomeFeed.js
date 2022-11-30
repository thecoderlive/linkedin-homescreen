import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.profile_pic}
    source={{uri: item.profile_pic}}
   />
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.position}>{item.position}</Text>
<Text style={styles.about_post}>{item.about_post}</Text>
<Image
    style={styles.post_image}
    source={{uri: item.post_image}}
    />
<Text style={styles.like_counts}>{item.like_counts}</Text>
<Image
    style={styles.like_icon}
    source={{uri: item.like_icon}}
   />
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'profile_pic': {
        'width': '8vw',
        'height': '8vw',
        'margin': 5,
        'borderRadius': 50
    },
    'name': {
        'color': '#080707',
        'fontSize': 20,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'position': {
        'color': '#7a7575',
        'fontSize': 17,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_post': {
        'fontSize': 18,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#030303'
    },
    'post_image': {
        'width': '100vw',
        'height': '70vw',
        'marginTop': 5
    },
    'like_counts': {
        'color': '#656161',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 12
    },
    'like_icon': {
        'width': '8vw',
        'height': '8vw',
        'margin': 8
    }
});