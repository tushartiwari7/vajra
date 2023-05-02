import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyText from './atoms/Text';

export default function IntroCard() {
  return (
    <View>
      <Image
        source={require('../assets/prodev.jpg')}
        style={{height: 200}}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
