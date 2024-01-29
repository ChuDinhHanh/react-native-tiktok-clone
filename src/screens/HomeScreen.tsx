import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import HeaderHomeScreenComponent from '../components/HeaderHomeScreenComponent'
import SingleVideoComponent from '../components/ingredient/SingleVideoComponent'
import CommentModal from '../components/modal/CommentModal'
import { Colors } from '../constants/Colors'
import { LOGIN_SCREEN, SIGN_IN_SCREEN } from '../constants/Screens'
import { SCREEN_WIDTH } from '../constants/Variables'
import { Videos } from '../data/Videos'
import { RootStackParamList } from '../router/Router'
import { getHeightOfWrapperVideo } from '../utils/HeightOfVideo'
import LoginScreen from './LoginScreen'
import SignInScreen from './SignInScreen'

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
    console.log('==================HomeScreen==================');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [currentIndex, setCurrentIndex] = useState(0);
    const heightOfWrapperVideo = getHeightOfWrapperVideo();
    
    const handleChooseOptionEvent = useCallback((idChoose: number) => {
        console.log(idChoose);
    }, [])

    return (

        <View
            style={[styles.homeWrapper, { height: heightOfWrapperVideo }]}
        >
            <StatusBar backgroundColor={Colors.BLACK} />
            {/*  */}
            <HeaderHomeScreenComponent
                onChooseOptionEvent={handleChooseOptionEvent}
            />
            <SwiperFlatList
                refreshing={false}
                onRefresh={() => {
                    console.log('Call data');
                }}
                vertical
                renderItem={({ item, index }) =>
                    <SingleVideoComponent
                        currentIndex={currentIndex}
                        item={item}
                        index={index} />}
                data={Videos}
                keyExtractor={(item, index) => index.toString()}
                onScroll={e => {
                    const realIndex = Math.round(
                        e.nativeEvent.contentOffset.y / (heightOfWrapperVideo),
                    );
                    setCurrentIndex(realIndex);
                }}
            />
            <CommentModal />
        </View>
    )
}

const styles = StyleSheet.create({
    homeWrapper: {
        alignItems: 'center',
        width: SCREEN_WIDTH,
        backgroundColor: Colors.BLACK,
    }
})
export default HomeScreen