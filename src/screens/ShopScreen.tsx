import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import NewOfferComponent from '../components/ingredient/NewOfferComponent';
import RowComponent from '../components/ingredient/RowComponent';
import SessionComponent from '../components/ingredient/SessionComponent';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import VoucherComponent from '../components/ingredient/VoucherComponent';
import {Colors} from '../constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Variables';
import {BannerTopData} from '../data/BannerTopData';
import {NewOfferData, NewOfferDataSale} from '../data/NewOfferData';
import {handleScrollEvent} from '../utils/BackToTopListen';
import BannerComponent from '../components/BannerComponent';
import HeaderShopScreenComponent from '../components/ingredient/HeaderShopScreenComponent';
import CategoriesComponent from '../components/ingredient/CategoriesComponent';
import ButtonBackToTop from '../components/ingredient/ButtonBackToTop';

const ShopScreen = () => {
  console.log('=================ShopScreen===================');
  const ScrollViewRef = useRef<ScrollView>(null);
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  return (
    <View>
      <SessionComponent padding={10}>
        {/* Header */}
        <HeaderShopScreenComponent />
        <SpaceComponent height={5} />
        <ScrollView
          onScroll={event =>
            handleScrollEvent(
              event,
              showBackToTopButton,
              setShowBackToTopButton,
            )
          }
          ref={ScrollViewRef}
          showsVerticalScrollIndicator={false}>
          {/* Banner */}
          <BannerComponent
            autoScroll={true}
            showNode={true}
            widthOfBanner={SCREEN_WIDTH - 20}
            height={110}
            data={BannerTopData}
          />
          {/* Body */}
          {/* New voucher */}
          <VoucherComponent isShadow={true} isNeedButtonTakeTicket={false} />
          {/* New offer */}
          <NewOfferComponent
            isBigBanner={true}
            title="Ưu Đãi Bạn Mới"
            productList={NewOfferData}
          />
          {/* Host sale */}
          <SpaceComponent height={10} />
          <RowComponent justify={'space-between'} alignItems="center">
            <NewOfferComponent
              isBigBanner={false}
              title="Hàng Hiệu Giá Hời"
              productList={NewOfferDataSale}
            />
            <SpaceComponent width={10} />
            <NewOfferComponent
              isBigBanner={false}
              title="Flash Sale"
              productList={NewOfferDataSale}
            />
          </RowComponent>
          <SpaceComponent height={10} />
          <View style={styles.wrapperCategories}>
            <CategoriesComponent />
          </View>
        </ScrollView>
      </SessionComponent>
      {showBackToTopButton && <ButtonBackToTop scrollViewRef={ScrollViewRef} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperBanner: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 0.5,
  },
  bannerItem: {
    backgroundColor: 'rgb(254 242 250)',
    width: 200,
    height: 70,
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    top: 30,
  },
  dotLeft: {
    left: -5,
  },
  dotRight: {
    right: -5,
  },
  wrapperNewOffer: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 0.5,
  },
  wrapperCategories: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT,
  },
});

export default ShopScreen;
