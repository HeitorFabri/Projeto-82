import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import PostCard from './PostCard';

var posts = require("./temp_post.json");

export default class Feed extends React.Component{
  keyExtractor = (item, index) =>{
    index.toString();
  }
  renderItem = ({item: post}) =>{
    return(
      <PostCard
      post={post}/>
    )
  }
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image 
                source={require("../assets/logo.png")}
                style={styles.iconImage}>

              </Image>
              <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText}>
                  Espectagrama
                </Text>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <FlatList 
                keyExtractor={this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}/>
            </View>
          </View>
          </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
