import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import RowComponent from './ingredient/RowComponent';
import ButtonComponent from './ingredient/ButtonComponent';
import TextComponent from './ingredient/TextComponent';
import { Colors } from '../constants/Colors';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../router/Router';

const HeaderSearchScreenComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [keyword, setKeyword] = useState('');

    return (
        <RowComponent justify={'space-between'} alignItems='center'>
            <ButtonComponent
                previousIcon={
                    <IconIonicons size={30} color={Colors.BLACK} name='arrow-back-sharp' />
                }
                onPress={() => {
                    navigation.goBack();
                }}
            />
            {/* Input */}
            <View style={{
                flex: 1,
                marginHorizontal: 5,
                backgroundColor: 'rgb(241 241 242)',
                borderRadius: 10,
                height: 45,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <IconAntDesign size={25} color={'grey'} name='search1' style={{ paddingHorizontal: 5 }} />
                    <TextInput
                        value={keyword}
                        onChangeText={(val) => setKeyword(val)}
                        style={{ flex: 1 }} cursorColor={Colors.PINK} />
                    {
                        Boolean(keyword) && <ButtonComponent
                            previousIcon={<IconAntDesign size={23} color={'grey'} name='closecircle' style={{ paddingHorizontal: 5 }} />}
                            onPress={() => setKeyword('')
                            } />
                    }
                </View>
            </View>
            <ButtonComponent
                titleChildren={
                    <TextComponent text='Tìm kiếm' fontSize={18} fontWeight='bold' color={Colors.PINK} />
                }
                onPress={() => { }} />
        </RowComponent>
    )
}

export default HeaderSearchScreenComponent