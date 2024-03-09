import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../constants/Colors';
import ButtonComponent from './ingredient/ButtonComponent';
import RowComponent from './ingredient/RowComponent';
import SessionComponent from './ingredient/SessionComponent';
import SpaceComponent from './ingredient/SpaceComponent';
import TextComponent from './ingredient/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router/Router';
import Container from './ingredient/Container';
const HeaderMessengerScreenComponent = () => {
  console.log(
    '==================HeaderMessengerScreenComponent==================',
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Container color={Colors.WHITE} isCenter={false} notFullHeightScreen={true}>
      <SessionComponent paddingHorizontal={16} paddingVertical={0}>
        <RowComponent alignItems="center" justify="space-between">
          {/* Left side */}
          <RowComponent justify="center" alignItems="center">
            {/* Back button */}
            <ButtonComponent
              onPress={() => navigation.goBack()}
              previousIcon={
                <AntDesign name="arrowleft" size={30} color={Colors.BLACK} />
              }
            />
            <SpaceComponent width={10} />
            {/* Store */}
            <RowComponent alignItems="center" justify={'flex-start'}>
              <View style={styles.wrapper_store_info}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-deo-kinh.jpg',
                  }}
                />
                {/* Text notification live streaming  */}
                <View style={styles.text}>
                  <TextComponent isUpperCase={true} text="live" fontSize={8} />
                </View>
              </View>
              <SpaceComponent width={10} />
              <TextComponent
                fontSize={18}
                text="ODIN STORE"
                color={Colors.BLACK}
                fontWeight="bold"
              />
            </RowComponent>
          </RowComponent>
          {/* Right side */}
          <RowComponent justify="center" alignItems="center">
            <ButtonComponent
              previousIcon={
                <Entypo name="shop" size={25} color={Colors.BLACK} />
              }
              onPress={() => {}}
            />
            <SpaceComponent width={15} />
            <ButtonComponent
              previousIcon={
                <Entypo
                  name="dots-three-horizontal"
                  size={20}
                  color={Colors.BLACK}
                />
              }
              onPress={() => {}}
            />
          </RowComponent>
        </RowComponent>
      </SessionComponent>
      {/* Bottom line */}
      <SpaceComponent height={5} />
      <View style={styles.bottomLine} />
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper_store_info: {
    width: 47,
    height: 47,
    borderRadius: 100,
    backgroundColor: Colors.PINK_2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  text: {
    position: 'absolute',
    backgroundColor: Colors.PINK_2,
    paddingHorizontal: 5,
    bottom: -2,
    borderWidth: 0.5,
    borderColor: Colors.WHITE,
  },
  bottomLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: Colors.GREY_PALE,
  },
});
export default HeaderMessengerScreenComponent;
