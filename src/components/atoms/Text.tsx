import {StyleProp, StyleSheet, Text} from 'react-native';
import React from 'react';

type TextProps = {
  children: JSX.Element | string;
  style?: StyleProp<Text> | any;
};

const MyText = ({children, style, ...props}: TextProps) => {
  const classes = Array.isArray(style)
    ? [styles.text, ...style]
    : [styles.text, style];

  return (
    <Text style={classes} {...props}>
      {children}
    </Text>
  );
};

const MySubText = ({children, ...props}: TextProps) => {
  return (
    <MyText style={styles.subText} {...props}>
      {children}
    </MyText>
  );
};

const MyTitleText = ({children, ...props}: TextProps) => {
  return (
    <MyText style={styles.title} {...props}>
      {children}
    </MyText>
  );
};

const MySubTitleText = ({children, ...props}: any) => {
  return (
    <MyText style={styles.subTitle} {...props}>
      {children}
    </MyText>
  );
};

MyText.Small = MySubText;
MyText.Title = MyTitleText;
MyText.SubTitle = MySubTitleText;
export default MyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
  },
  subText: {
    fontSize: 12,
    fontWeight: '300',
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
