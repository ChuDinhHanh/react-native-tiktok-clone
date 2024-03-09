import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../constants/Colors';

interface Props {
  height?: number;
  backgroundColor?: string;
}

const LineComponent = (props: Props) => {
  const {backgroundColor, height} = props;
  return (
    <View
      style={[
        styles.line,
        {
          height: height ?? 1,
          backgroundColor: backgroundColor ?? Colors.GREY_5,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
  },
});
export default LineComponent;
