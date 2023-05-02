import {StyleProp, StyleSheet, Text} from 'react-native';
import React, {ReactNode} from 'react';

type TextProps = {
  children: ReactNode;
  style?: StyleProp<Text> | any;
};

type textVariant = 'text' | 'title' | 'subTitle' | 'subText';

const getClasses = (
  propStyles: StyleProp<Text> | undefined,
  variant: textVariant,
) => {
  const classes = Array.isArray(propStyles)
    ? [styles[variant], ...propStyles]
    : [styles[variant], propStyles];
  return classes;
};

const MyText = ({children, style, ...props}: TextProps) => {
  const classes = getClasses(style, 'text') as any;
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

const MySubTitleText = ({children, ...props}: TextProps) => {
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
    lineHeight: 18,
  },
  subText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '300',
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
  },
});
