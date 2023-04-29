import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

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
  const scaleHeight = ({
    source,
    desiredWidth = Dimensions.get('window').width,
  }: any) => {
    const {width, height} = Image.resolveAssetSource(source);
    const useHeight = (desiredWidth / width) * height;
    return {width: desiredWidth, height: useHeight};
  };

  const imageSource = '../assets/IMG_20230311_204944.jpg';
  const imageWidth = 150;
  const {width, height} = scaleHeight({
    source: require(imageSource),
    desiredWidth: imageWidth,
  });

  return (
    <>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        horizontal
        renderItem={() => <FlatCard />}
        ItemSeparatorComponent={() => <View style={styles.gap}></View>}
      />
      <View style={styles.card}>
        <Image
          resizeMode="contain"
          source={require(imageSource)}
          style={{
            ...{height, width},
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.heading}>Heading Text</Text>
        <Text style={styles.sub_heading}>Heading Text</Text>
        <Text style={styles.description}>Heading Text</Text>
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
    padding: 40,
    fontFamily: 'sans-serif',
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
