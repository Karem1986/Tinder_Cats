import React from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';

const colors = {
  red: '#EC2379',
  blue: '#0070FF',
  gray: '#777777',
  white: '#ffffff',
  black: '#000000',
};
export default function Card(props) {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    borderRadius: 20,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 0},
  },
  image: {
    width: 360,
    flex: 1,
    resizeMode: 'contain',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 200,
    marginLeft: 40,
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});
