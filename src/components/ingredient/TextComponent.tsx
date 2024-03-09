import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface Props {
  text: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  width?: number | 'auto';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDecoration?: boolean;
  isUpperCase?: boolean;
}

const TextComponent = (props: Props) => {
  const {
    text,
    fontSize,
    color,
    fontFamily,
    fontWeight,
    textDecoration,
    width,
    isUpperCase,
  } = props;
  return (
    <Text
      style={{
        fontSize: fontSize ?? 15,
        color: color ?? Colors.WHITE,
        fontFamily: fontFamily,
        fontWeight,
        textDecorationLine: textDecoration ? 'line-through' : 'none',
        flexWrap: 'wrap',
        width,
        textTransform: isUpperCase ? 'uppercase' : undefined,
      }}>
      {text}
    </Text>
  );
};

export default TextComponent;
