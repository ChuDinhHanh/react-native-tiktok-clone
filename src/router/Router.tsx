import React from 'react';
import { Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BOTTOM_TAB_NAVIGATOR, DETAIL_SCREEN, HOME_SCREEN, LOGIN_SCREEN, SHOP_SCREEN, SIGN_IN_SCREEN, SPLASH_SCREEN, STACK_NAVIGATOR_AUTHENTICATION } from '../constants/Screens';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import SplashScreen from '../screens/SplashScreen';
import { GlobalStyle } from '../styles/GlobalStyle';
import AddScreen from '../screens/AddScreen';
import ShopScreen from '../screens/ShopScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { INITIAL_SCREEN } from '../constants/SystemConstant';



export type RootStackParamList = {
  HOME_SCREEN: undefined
  DETAIL_SCREEN: undefined
  LOGIN_SCREEN: undefined
  SIGN_IN_SCREEN: undefined
  SPLASH_SCREEN: undefined
  STACK_NAVIGATOR_AUTHENTICATION: undefined
  BOTTOM_TAB_NAVIGATOR: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <TopTab.Screen name={DETAIL_SCREEN} component={DetailScreen} />
    </TopTab.Navigator>
  )
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: Colors.BLACK },
        headerShown: false,
        tabBarActiveTintColor: Colors.WHITE
      }}
    >
      <BottomTab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/home.png')}
              style={[
                GlobalStyle.bottomTabIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/search.png')}
              style={[
                GlobalStyle.bottomTabIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="NewVideo"
        component={AddScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/new-video.png')}
              style={[
                GlobalStyle.newVideoButton,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Hộp thư"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/message.png')}
              style={[
                GlobalStyle.bottomTabIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Hồ sơ"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/user.png')}
              style={[
                GlobalStyle.bottomTabIcon,
                focused && GlobalStyle.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

function StackNavigatorAuthentication() {
  return (
    <RootStack.Navigator
      initialRouteName={LOGIN_SCREEN}
      screenOptions={{
        headerShown: false
      }}
    >
      <RootStack.Screen
        name={LOGIN_SCREEN}
        component={LoginScreen}
      />
      <RootStack.Screen
        name={SIGN_IN_SCREEN}
        component={SignInScreen}
      />
    </RootStack.Navigator>
  )
}

function StackNavigatorMain() {
  return (
    <RootStack.Navigator
      initialRouteName={INITIAL_SCREEN}
    >
      <RootStack.Screen
        name={SPLASH_SCREEN}
        component={SplashScreen}
        options={{ header: () => false }}
      />
      <RootStack.Screen
        name={BOTTOM_TAB_NAVIGATOR}
        component={BottomTabNavigator}
        options={{ header: () => false }}
      />
      <RootStack.Screen
        name={STACK_NAVIGATOR_AUTHENTICATION}
        component={StackNavigatorAuthentication}
        options={{ header: () => false }}
      />
    </RootStack.Navigator>
  )
}


const Router = () => {
  return <StackNavigatorMain />
}

export default Router