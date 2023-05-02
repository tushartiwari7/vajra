import React from 'react';
import {Dimensions, Image as RNImage} from 'react-native';

interface ImageCompType {
  source: string;
  desiredWidth?: number;
}

interface scaleHeight extends ImageCompType {}

const scaleHeight = ({
  source,
  desiredWidth = Dimensions.get('window').width,
}: scaleHeight) => {
  const imgSrc = require('../../assets/prodev.jpg');
  const dims = RNImage.resolveAssetSource(imgSrc);
  const {width, height} = dims;
  console.log({width, height, dims});

  const useHeight = (desiredWidth / width) * height;

  console.log({useHeight, width, height});

  return {width: desiredWidth, height: useHeight};
};

const Image = ({source, desiredWidth}: ImageCompType) => {
  const {width, height} = scaleHeight({
    source,
    desiredWidth,
  });

  return (
    <RNImage
      resizeMode="contain"
      source={{
        uri: 'https://pbs.twimg.com/media/FRl58OZaIAAIpUN?format=jpg&name=small',
      }}
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
      }}
    />
  );
};

export default Image;
