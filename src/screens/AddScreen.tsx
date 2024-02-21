import {View, Text} from 'react-native';
import React from 'react';
import CategoriesComponent from '../components/ingredient/CategoriesComponent';
import WomenClothesComponent from '../components/toptab/WomenClothesComponent';
import SkeletonShopScreen from '../components/skeleton/SkeletonShopScreen';
import HeaderDetailScreenComponent from '../components/HeaderDetailScreenComponent';

const AddScreen = () => {
  return (
    <View>
      {/* <SkeletonShopScreen /> */}
      <HeaderDetailScreenComponent />
      <Text>AddScreen lorem</Text>
    </View>
  );
};

export default AddScreen;
