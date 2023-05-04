import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  Image as RNImage,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
interface ImageCompType {
  source: ImageSourcePropType;
  height?: number | `${number}%`;
}

// interface scaleHeight extends ImageCompType {
//   desiredWidth: number;
// }

// const scaleHeight = ({source, desiredWidth}: scaleHeight) => {
//   const dims = RNImage.resolveAssetSource(source);
//   const {width, height, scale} = dims;
//   console.log({width, height, dims});

//   const useHeight = (desiredWidth / width) * height;
//   console.log({useHeight, width, height});
//   return {width: desiredWidth, height: useHeight, scale};
// };

const Image = ({source, height = '100%', ...props}: ImageCompType) => {
  const dims = RNImage.resolveAssetSource(source);

  return (
    <RNImage
      {...props}
      source={source}
      resizeMethod="scale"
      resizeMode="contain"
      style={[
        styles.image,
        {
          height,
          aspectRatio: dims.width / dims.height,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderColor: 'blue',
    borderWidth: 3,
    flex: 1,
  },
});

export default Image;
