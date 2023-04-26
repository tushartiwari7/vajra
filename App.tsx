import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[styles.container, styles.center]}>
      <View>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
        <Text style={[isDarkMode ? styles.dark : styles.light, styles.text]}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 5,
    borderStyle: 'solid',
    height: '100%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    color: 'hotpink',
  },
  light: {
    color: '#333',
  },
  text: {
    fontSize: 22,
  },
});
