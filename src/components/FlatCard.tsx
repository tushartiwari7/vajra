import {FlatList, StyleSheet, View, useColorScheme} from 'react-native';
import Text from './atoms/Text';
import MyImage from './atoms/Image';

const FlatCard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const background = isDarkMode ? styles.bgDark : styles.bgWhite;

  return (
    <View style={[styles.box, background]}>
      <Text>FlatCard</Text>
    </View>
  );
};

const FlatCards = () => {
  const img = require('../assets/prodev.jpg');
  return (
    <>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        horizontal
        renderItem={() => <FlatCard />}
        ItemSeparatorComponent={() => <View style={styles.gap}></View>}
      />
      <View style={styles.card}>
        <MyImage source={img} />
      </View>
      <View style={styles.card}>
        <View>
          <Text.Title>Heading Text</Text.Title>
          <Text.SubTitle>
            Starting a Gradle Daemon (subsequent builds will be faster)
          </Text.SubTitle>
          <Text.Small>
            Piyush@Mac-mini AwesomeProject % git commit -m "feat-atoms text" dev
            79e0b98 feat-atoms text 3 files changed, 83 insertions, 4 deletions
            create mode 100644 src/components/IntroCard.jsx create mode 100644
            src/components/atoms/Text.tsx
          </Text.Small>
        </View>
      </View>
    </>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  gap: {
    width: 5,
  },
  bgDark: {
    backgroundColor: '#121212',
  },
  bgWhite: {
    backgroundColor: '#fafafa',
  },
  logo: {
    width: 100,
    height: 100,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    padding: 40,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Poppins',
  },
  sub_heading: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
  description: {
    fontSize: 18,
    fontFamily: 'Source Code Pro',
    fontWeight: '800',
  },
});
