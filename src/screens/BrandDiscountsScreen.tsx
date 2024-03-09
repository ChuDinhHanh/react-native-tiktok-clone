import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Image} from 'react-native';
import SessionComponent from '../components/ingredient/SessionComponent';
import VoucherComponent from '../components/ingredient/VoucherComponent';
import TextComponent from '../components/ingredient/TextComponent';
import {SCREEN_HEIGHT} from '@gorhom/bottom-sheet';
import TopSelectComponent from '../components/ingredient/TopSelectComponent';
import CategoriesBrandDiscountComponent from '../components/ingredient/CategoriesBrandDiscountComponent';
import HeaderBrandDiscountScreen from '../components/HeaderBrandDiscountScreen';
import SpaceComponent from '../components/ingredient/SpaceComponent';

const BrandDiscountsScreen = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* Avatar  */}
          <ImageBackground
            source={require('./../assets/images/TikTokShopBanner.jpg')}
            style={[styles.image, {height: SCREEN_HEIGHT * 0.4, zIndex: -99}]}
          />
          {/* Top */}
          <View style={styles.wrapperHeader}>
            <SessionComponent padding={0} paddingHorizontal={16}>
              {/* Header */}
              <HeaderBrandDiscountScreen />
            </SessionComponent>
          </View>
          {/* Bottom */}
          <View style={styles.wrapperTopSelected}>
            <SessionComponent padding={0} paddingHorizontal={16}>
              {/* Banner top select */}
              <TopSelectComponent />
            </SessionComponent>
          </View>
        </View>
        <View style={styles.wrapperCategories}>
          <CategoriesBrandDiscountComponent />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperCategories: {
    width: '100%',
    height: SCREEN_HEIGHT,
  },
  wrapperHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  wrapperTopSelected: {
    position: 'absolute',
    bottom: 1,
  },
  image: {
    width: '100%',
  },
});
export default BrandDiscountsScreen;
