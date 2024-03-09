import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {Colors} from '../../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  percent: number;
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
}
const SaleOffPercentComponent = (props: Props) => {
  const {
    percent,
    borderTopRightRadius,
    bottom,
    left,
    top,
    right,
    borderBottomRightRadius,
  } = props;
  return (
    <View
      style={[
        styles.saleOffBannerWrapper,
        {
          borderTopRightRadius,
          bottom,
          left,
          top,
          right,
          borderBottomRightRadius,
        },
      ]}>
      <RowComponent justify={'center'} alignItems="center">
        <MaterialCommunityIcons
          name="transfer-down"
          size={15}
          color={Colors.WHITE}
        />
        <TextComponent text={percent + '%'} fontSize={14} />
      </RowComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  saleOffBannerWrapper: {
    position: 'absolute',
    backgroundColor: Colors.PINK,
    width: 100 / 2,
    justifyContent: 'center',
  },
});
export default SaleOffPercentComponent;
