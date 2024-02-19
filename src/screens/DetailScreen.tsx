import React, { useState } from 'react';
import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';
import { SCREEN_WIDTH, WINDOW_HEIGHT } from '../constants/Variables';
import { SingleProductData } from '../data/SingleProductData';
import BannerComponent from '../components/BannerComponent';
import RowComponent from '../components/ingredient/RowComponent';
import TextComponent from '../components/ingredient/TextComponent';
import SessionComponent from '../components/ingredient/SessionComponent';
import LinearGradient from 'react-native-linear-gradient';
import { formatVietNamCurrency } from '../utils/FormatCurrency';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import { DrawerContent } from '@react-navigation/drawer';
import ContentSingleVideo from '../components/ingredient/ContentSingleVideo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import RateQtyProductComponent from '../components/ingredient/RateQtyProductComponent';
import ButtonCommentComponent from '../components/ingredient/ButtonCommentComponent';
import ButtonComponent from '../components/ingredient/ButtonComponent';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import VoucherComponent from '../components/ingredient/VoucherComponent';

const DetailScreen = () => {
  const data = SingleProductData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const widthOfPerImage = SCREEN_WIDTH;
  const totalWidthOfArrayImages = widthOfPerImage * data.images.length;

  const handleOnScrollEvent = (val: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log(val.nativeEvent.contentOffset.x);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Product images  */}
      <BannerComponent
        autoScroll={false}
        showIndexNumber={true}
        widthOfBanner={SCREEN_WIDTH}
        height={WINDOW_HEIGHT * 0.5}
        data={SingleProductData.images}
      />
      {/* Price and policy */}
      <LinearGradient colors={['rgb(254 103 78)', 'rgb(255 26 135)']} angle={45}>
        <SessionComponent>
          <RowComponent justify={'space-between'} alignItems='center'>
            <RowComponent justify='flex-start' alignItems='center'>
              <IconIonicons name='ticket' size={20} color={Colors.WHITE} />
              <SpaceComponent width={5} />
              <TextComponent fontSize={18} text={`${formatVietNamCurrency(SingleProductData.price)} đ`} />
            </RowComponent>
            <TextComponent text={`Chiết khấu khách hàng đầu tiên`} />
          </RowComponent>
        </SessionComponent>
      </LinearGradient>
      {/* Name */}
      <SessionComponent paddingNotTop={true} backgroundColor={Colors.WHITE} >
        <SpaceComponent height={10} />
        <RowComponent justify='space-between'>
          <View
            style={{ width: '95%' }}
          >
            <ContentSingleVideo
              color={Colors.BLACK}
              numberOfLines={3}
              content={data.name}
              padding={0}
            />
          </View>
          <View
            style={{ width: '5%', alignItems: 'flex-end' }}
          >
            <IconFontisto
              style={{
                paddingTop: 5
              }}
              name='favorite' size={25} color={Colors.BLACK} />
          </View>
        </RowComponent>
        <SpaceComponent height={20} />
        <RateQtyProductComponent rateQty={<TextComponent text='(33)' color={Colors.BLUE_1} />} fontSize={15} color={Colors.BLACK} />
        {/* Policy with customer */}
      </SessionComponent>
      {/* Options choose */}
      <View style={{ marginTop: 10 }}>
        <SessionComponent backgroundColor={Colors.WHITE}>
          <RowComponent justify='space-between' alignItems='center'>
            <TextComponent fontWeight='bold' text='Chọn các tùy chọn' fontSize={18} color={Colors.BLACK} />
            <ButtonComponent
              titleChildren={<TextComponent text='# 01' color={Colors.BLACK} fontSize={18} />}
              beHindIcon={<IconAntDesign name='right' size={15} color={Colors.GREY} />}
              onPress={() => { console.log("see option") }} />
          </RowComponent>
        </SessionComponent>
      </View>
      {/* Voucher saleOff */}
      <View style={{ backgroundColor: Colors.WHITE, marginVertical: 10 }}>
        <View>
          <SessionComponent backgroundColor={Colors.WHITE}>
            <RowComponent justify='space-between' alignItems='center'>
              <TextComponent fontWeight='bold' text='Voucher và khuyến mãi' fontSize={18} color={Colors.BLACK} />
              <ButtonComponent
                beHindIcon={<IconAntDesign name='right' size={15} color={Colors.GREY} />}
                onPress={() => { console.log("see option") }} />
            </RowComponent>
          </SessionComponent>
        </View>
        <VoucherComponent padding={0} />
        <View>
          <SessionComponent backgroundColor={Colors.WHITE}>
            <RowComponent justify='space-between' alignItems='center'>
              <TextComponent fontWeight='bold' text='Mua 3 được giảm 5' fontSize={18} color={Colors.BLACK} />
              <ButtonComponent
                beHindIcon={<IconAntDesign name='right' size={15} color={Colors.GREY} />}
                onPress={() => { console.log("see option") }} />
            </RowComponent>
          </SessionComponent>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailScreen