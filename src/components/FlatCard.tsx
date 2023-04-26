import {ScrollView, StyleSheet, Text, View, useColorScheme} from 'react-native';

const FlatCard = () => {
  return (
    <View style={styles.box}>
      <Text>FlatCard</Text>
    </View>
  );
};

const FlatCards = () => {
  console.log('flatcards', useColorScheme());
  return (
    <ScrollView horizontal>
      <FlatCard />
      <FlatCard />
      <FlatCard />
      <FlatCard />
      <FlatCard />
      <FlatCard />
    </ScrollView>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    elevation: 10,
    shadowColor: '#ffffff',
    shadowOpacity: 0,
  },
});
