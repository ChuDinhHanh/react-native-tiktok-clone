import React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Colors} from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextComponent from './TextComponent';
import Container from './Container';
import SpaceComponent from './SpaceComponent';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {STACK_NAVIGATION_SERVICE} from '../../constants/Screens';

interface Props {
  item: any;
  isFirstItem: boolean;
}
const StreamVideoItem = (props: Props) => {
  console.log('================StreamVideoItem====================');
  const {item, isFirstItem} = props;
  const navigation = useNavigation();

  const handleClickItemEvent = (id: number) => {
    navigation.dispatch(
      CommonActions.navigate(STACK_NAVIGATION_SERVICE, {
        screen: isFirstItem
          ? 'HOST_LIVE_STREAM_SCREEN'
          : 'AUDIENCE_LIVE_STREAM_SCREEN',
        params: undefined,
      }),
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleClickItemEvent(item.id);
      }}>
      <Container
        notFullWidthScreen={true}
        color={Colors.WHITE}
        isCenter={true}
        notFullHeightScreen={true}
        marginLeft={16}>
        {/* Avatar */}
        <View
          style={{
            width: 75,
            height: 75,
            borderRadius: 75,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isFirstItem ? Colors.WHITE : Colors.PINK,
          }}>
          <Image
            source={{uri: item.avatar}}
            width={70}
            height={70}
            borderRadius={70}
            style={{
              borderWidth: 2,
              borderColor: Colors.WHITE,
            }}
          />

          {isFirstItem ? (
            <View
              style={{
                position: 'absolute',
                right: -5,
                bottom: 5,
                width: 25,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.WHITE,
                overflow: 'hidden',
                borderRadius: 25,
              }}>
              <Ionicons name="add-circle" size={25} color={Colors.BLUE_1} />
            </View>
          ) : (
            <View
              style={{
                position: 'absolute',
                right: -5,
                bottom: 5,
                width: 25,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.PINK_2,
                overflow: 'hidden',
                borderRadius: 25,
                borderWidth: 2,
                borderColor: Colors.WHITE,
              }}>
              <FontAwesome6
                name="chart-simple"
                size={13}
                color={Colors.WHITE}
              />
            </View>
          )}
        </View>
        <SpaceComponent height={5} />
        {/* Name */}
        <TextComponent
          fontSize={13}
          text={isFirstItem ? 'Quay' : item.name}
          color={Colors.BLACK}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default StreamVideoItem;
