import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../router/Router'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { LOGIN_SCREEN, SIGN_IN_SCREEN } from '../constants/Screens'
import LoginScreen from './LoginScreen'
import SignInScreen from './SignInScreen'
import BottomSheetComponent from '../components/common/BottomSheetComponent'


const TopTab = createMaterialTopTabNavigator();
function TopTabNavigator(): JSX.Element {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name={LOGIN_SCREEN} component={LoginScreen} />
            <TopTab.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
        </TopTab.Navigator>
    )
}


const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen