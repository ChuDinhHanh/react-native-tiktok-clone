import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailNotificationHeaderComponent from '../components/DetailNotificationHeaderComponent';
import HeaderDetailScreenComponent from '../components/HeaderDetailScreenComponent';
import HeaderNewOfferScreenComponent from '../components/HeaderNewOfferScreenComponent';
import HeaderSearchScreenComponent from '../components/HeaderSearchScreenComponent';
import HeaderUserProfileScreenComponent from '../components/HeaderUserProfileScreenComponent';
import HeaderShopScreenComponent from '../components/ingredient/HeaderShopScreenComponent';
import TextComponent from '../components/ingredient/TextComponent';
import {Colors} from '../constants/Colors';
import {
  AUDIENCE_LIVE_STREAM_SCREEN,
  BOTTOM_TAB_NAVIGATOR,
  BRAND_DISCOUNTS,
  CART_SCREEN,
  DETAIL_NOTIFICATION_SCREEN,
  DETAIL_SCREEN,
  DETAIL_STORE_SCREEN,
  FLASH_SALE_SCREEN,
  HOME_SCREEN,
  HOST_LIVE_STREAM_SCREEN,
  LOGIN_SCREEN,
  MESSENGER_SCREEN,
  NEW_OFFER_SCREEN,
  SEARCH_SCREEN,
  SIGN_IN_SCREEN,
  SPLASH_SCREEN,
  STACK_NAVIGATION_SERVICE,
  STACK_NAVIGATOR_AUTHENTICATION,
} from '../constants/Screens';
import {INITIAL_SCREEN} from '../constants/SystemConstant';
import AddScreen from '../screens/AddScreen';
import AudienceLiveStreamScreen from '../screens/AudienceLiveStreamScreen';
import BrandDiscountsScreen from '../screens/BrandDiscountsScreen';
import CartScreen from '../screens/CartScreen';
import DetailNotificationScreen from '../screens/DetailNotificationScreen';
import DetailProductScreen from '../screens/DetailProductScreen';
import FlashSaleScreen from '../screens/FlashSaleScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import NewOfferScreen from '../screens/NewOfferScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import ShopScreen from '../screens/ShopScreen';
import SignInScreen from '../screens/SignInScreen';
import SplashScreen from '../screens/SplashScreen';
import {GlobalStyle} from '../styles/GlobalStyle';
import HostLiveStreamScreen from '../components/ingredient/HostLiveStreamScreen';
import MessengerScreen from '../screens/MessengerScreen';
import DetailStoreScreen from '../screens/DetailStoreScreen';
import HeaderMessengerScreenComponent from '../components/HeaderMessengerScreenComponent';
import {DarkTheme} from '@react-navigation/native';

export type RootStackParamList = {
  HOME_SCREEN: undefined;
  DETAIL_SCREEN: undefined;
  LOGIN_SCREEN: undefined;
  SIGN_IN_SCREEN: undefined;
  SPLASH_SCREEN: undefined;
  STACK_NAVIGATOR_AUTHENTICATION: undefined;
  BOTTOM_TAB_NAVIGATOR: undefined;
  SEARCH_SCREEN: undefined;
  STACK_NAVIGATION_SERVICE: undefined;
  NEW_OFFER_SCREEN: undefined;
  FLASH_SALE_SCREEN: undefined;
  CART_SCREEN: undefined;
  DETAIL_NOTIFICATION_SCREEN: {id: number; title?: string; type: number};
  BRAND_DISCOUNTS: undefined;
  AUDIENCE_LIVE_STREAM_SCREEN: undefined;
  HOST_LIVE_STREAM_SCREEN: undefined;
  MESSENGER_SCREEN: undefined;
  DETAIL_STORE_SCREEN: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <TopTab.Screen name={DETAIL_SCREEN} component={DetailProductScreen} />
    </TopTab.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: Colors.BLACK},
        tabBarActiveTintColor: Colors.WHITE,
      }}>
      <BottomTab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/home.png')}
              style={[
                GlobalStyle.bottomTabIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/bagIcon2.png')}
              style={[
                GlobalStyle.bottomTabBagIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
          header: () => <HeaderShopScreenComponent />,
        }}
      />
      <BottomTab.Screen
        name="NewVideo"
        component={AddScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/new-video.png')}
              style={[
                GlobalStyle.newVideoButton,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Hộp thư"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/message.png')}
              style={[
                GlobalStyle.bottomTabIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
          header: () => (
            <HeaderUserProfileScreenComponent
              nameOfScreen={
                <TextComponent
                  fontSize={20}
                  text="Hộp thư"
                  color={Colors.BLACK}
                  fontWeight="bold"
                />
              }
              firstIcon={
                <Ionicons
                  name="add-circle-outline"
                  size={30}
                  color={Colors.BLACK}
                />
              }
              secondsIcon={
                <FontAwesome
                  name="chevron-down"
                  size={18}
                  color={Colors.BLACK}
                />
              }
              thirdIcon={
                <AntDesign name="search1" size={30} color={Colors.BLACK} />
              }
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Hồ sơ"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/user.png')}
              style={[
                GlobalStyle.bottomTabIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
          header: () => (
            <HeaderUserProfileScreenComponent
              nameOfScreen={
                <TextComponent
                  fontSize={20}
                  text="Chu Dinh Hanh"
                  color={Colors.BLACK}
                  fontWeight="bold"
                />
              }
              firstIcon={<Feather name="menu" size={30} color={Colors.BLACK} />}
              secondsIcon={
                <FontAwesome
                  name="chevron-down"
                  size={18}
                  color={Colors.BLACK}
                />
              }
              thirdIcon={
                <Ionicons
                  name="footsteps-outline"
                  size={30}
                  color={Colors.BLACK}
                />
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function StackNavigatorAuthentication() {
  return (
    <RootStack.Navigator
      initialRouteName={LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <RootStack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
    </RootStack.Navigator>
  );
}

function StackNavigatorMain() {
  return (
    <RootStack.Navigator initialRouteName={INITIAL_SCREEN}>
      <RootStack.Screen
        name={SPLASH_SCREEN}
        component={SplashScreen}
        options={{header: () => false}}
      />
      <RootStack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
        options={{header: () => false}}
      />
      <RootStack.Screen
        name={STACK_NAVIGATOR_AUTHENTICATION}
        component={StackNavigatorAuthentication}
        options={{header: () => false}}
      />
      <RootStack.Screen
        name={STACK_NAVIGATION_SERVICE}
        component={StackNavigatorService}
        options={{header: () => false}}
      />
    </RootStack.Navigator>
  );
}

function StackNavigatorService() {
  const headerMessengerComponent = <HeaderMessengerScreenComponent />;
  return (
    <RootStack.Navigator initialRouteName={SEARCH_SCREEN}>
      <RootStack.Screen
        name={SEARCH_SCREEN}
        component={SearchScreen}
        options={{header: () => <HeaderSearchScreenComponent />}}
      />
      <RootStack.Screen
        name={DETAIL_SCREEN}
        component={DetailProductScreen}
        options={{header: () => <HeaderDetailScreenComponent />}}
      />
      <RootStack.Screen
        name={CART_SCREEN}
        component={CartScreen}
        options={{header: () => false}}
      />
      <RootStack.Screen
        name={NEW_OFFER_SCREEN}
        component={NewOfferScreen}
        options={{header: () => <HeaderNewOfferScreenComponent />}}
      />

      <RootStack.Screen
        name={FLASH_SALE_SCREEN}
        component={FlashSaleScreen}
        options={{header: () => false}}
      />
      <RootStack.Screen
        name={DETAIL_NOTIFICATION_SCREEN}
        component={DetailNotificationScreen}
        // options={{ header: ({ route }) => (<DetailNotificationHeaderComponent title={route?.params?.title} />) }}

        options={({route}) => ({
          header: () => (
            <DetailNotificationHeaderComponent
              title={route.params?.title ?? ''}
            />
          ),
        })}
      />
      <RootStack.Screen
        name={BRAND_DISCOUNTS}
        component={BrandDiscountsScreen}
        options={{
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          header: () => false,
        }}
      />
      <RootStack.Screen
        name={AUDIENCE_LIVE_STREAM_SCREEN}
        component={AudienceLiveStreamScreen}
        options={{
          header: () => false,
        }}
      />
      <RootStack.Screen
        name={HOST_LIVE_STREAM_SCREEN}
        component={HostLiveStreamScreen}
        options={{
          header: () => false,
        }}
      />
      <RootStack.Screen
        name={MESSENGER_SCREEN}
        component={MessengerScreen}
        options={{
          statusBarColor: Colors.WHITE,
          statusBarStyle: 'dark',
          header: () => headerMessengerComponent,
        }}
      />
      <RootStack.Screen
        name={DETAIL_STORE_SCREEN}
        component={DetailStoreScreen}
        options={{
          header: () => false,
        }}
      />
    </RootStack.Navigator>
  );
}

const Router = () => {
  return <StackNavigatorMain />;
};

export default Router;
