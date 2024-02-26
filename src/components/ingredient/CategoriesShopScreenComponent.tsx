import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {DETAIL_SCREEN, STACK_NAVIGATION_SERVICE} from '../../constants/Screens';
import {RootStackParamList} from '../../router/Router';
import AllProductComponent from '../toptab/AllProductComponent';
import BestSellingDealComponent from '../toptab/BestSellingDealComponent';
import CosmeticsComponent from '../toptab/CosmeticsComponent';
import MallComponent from '../toptab/MallComponent';
import MenClothesComponent from '../toptab/MenClothesComponent';
import WomenClothesComponent from '../toptab/WomenClothesComponent';
import {NewOfferData} from '../../data/NewOfferData';

const TopTab = createMaterialTopTabNavigator();

function CategoriesShopScreenComponent(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleOnPressOnProductEvent = (item: number) => {
    navigation.navigate(STACK_NAVIGATION_SERVICE, {
      screen: DETAIL_SCREEN,
      params: undefined,
    } as any);
  };
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarStyle: {
          backgroundColor: Colors.GREY_2,
          elevation: 0,
          borderColor: Colors.GREY,
          borderBottomWidth: 0.2,
          marginBottom: 5,
        },
        tabBarItemStyle: {
          width: 'auto',
          marginHorizontal: 2,
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
        },
        // tabBarIndicator: () => null,
      }}>
      <TopTab.Screen name={'Tất cả'}>
        {() => (
          <AllProductComponent
            type={1}
            data={NewOfferData}
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>
      <TopTab.Screen name={'Deal Bán Chạy'}>
        {() => (
          <BestSellingDealComponent
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>
      <TopTab.Screen name={'Mall'}>
        {() => <MallComponent onPressOnProduct={handleOnPressOnProductEvent} />}
      </TopTab.Screen>
      <TopTab.Screen name={'Quần áo nữ'}>
        {() => (
          <WomenClothesComponent
            onPressOnProduct={handleOnPressOnProductEvent}
          />
        )}
      </TopTab.Screen>
      <TopTab.Screen name={'Mỹ phẩm'}>
        {() => (
          <CosmeticsComponent onPressOnProduct={handleOnPressOnProductEvent} />
        )}
      </TopTab.Screen>
      <TopTab.Screen name={'Quần áo nam'}>
        {() => (
          <MenClothesComponent onPressOnProduct={handleOnPressOnProductEvent} />
        )}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
}

export default CategoriesShopScreenComponent;
