import { View, Text, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import RowComponent from './ingredient/RowComponent'
import ButtonComponent from './ingredient/ButtonComponent'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../constants/Colors'
import SpaceComponent from './ingredient/SpaceComponent'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import TextComponent from './ingredient/TextComponent'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../router/Router'

const HeaderBrandDiscountScreen = () => {
    const heightOfStatusBar = StatusBar.currentHeight;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View>
            <SpaceComponent height={heightOfStatusBar} />
            <RowComponent justify='space-between' alignItems='center'>
                <ButtonComponent
                    previousIcon={
                        <Feather
                            size={35}
                            color={Colors.WHITE}
                            name="chevron-left"
                        />
                    }
                    onPress={() => navigation.goBack()}
                />
                <TextComponent
                    fontSize={18}
                    fontWeight='bold'
                    text='Hàng hiệu giá hời'
                />
                {/* Search bar*/}
                <TouchableWithoutFeedback
                    onPress={() => { console.log('search') }}
                >
                    <View
                        style={styles.wrapperSearchBar}
                    >
                        <RowComponent justify='space-between' alignItems='center'>
                            <AntDesign name='search1' color={Colors.WHITE} size={25} />
                            <SpaceComponent width={10} />
                            <TextComponent text='Tìm kiếm' />
                        </RowComponent>
                    </View>
                </TouchableWithoutFeedback>
                <ButtonComponent
                    padding={0}
                    previousIcon={
                        <Ionicons
                            name="cart-outline"
                            size={30}
                            color={Colors.WHITE}
                        />
                    }
                    onPress={() => {
                        console.log('cart');
                    }}
                />
            </RowComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperSearchBar: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: .4,
        borderColor: Colors.WHITE
    }
})
export default HeaderBrandDiscountScreen