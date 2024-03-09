import React, {useRef} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Container from '../components/ingredient/Container';
import SessionComponent from '../components/ingredient/SessionComponent';
import MessengerItem from '../components/messenger/MessengerItem';
import {Colors} from '../constants/Colors';
import {MessengerData} from '../data/CommonData';
import InputCommentModalComponent from '../components/ingredient/InputCommentModalComponent';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import InputMessengerScreenComponent from '../components/ingredient/InputMessengerScreenComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MessengerScreen = () => {
  console.log('=============MessengerScreen=======================');
  return (
    <Container color={Colors.WHITE} isCenter={false}>
      <SessionComponent paddingNotTop={true}>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <ActivityIndicator size="small" color={Colors.BLACK} />
              <SpaceComponent height={60} />
            </>
          )}
          ListFooterComponent={() => (
            <ActivityIndicator size="small" color={Colors.BLACK} />
          )}
          showsVerticalScrollIndicator={false}
          data={[...MessengerData].sort((a, b) => b.id - a.id)}
          keyExtractor={item => item.id.toString()}
          inverted
          renderItem={({item, index}) => <MessengerItem item={item} />}
        />
      </SessionComponent>
      <InputMessengerScreenComponent
        placeholder={'Gửi tin nhắn'}
        iconRightFirst={
          <Entypo name={'emoji-happy'} size={25} color={Colors.BLACK} />
        }
        iconRightSecond={
          <AntDesign name={'pluscircleo'} size={25} color={Colors.BLACK} />
        }
      />
    </Container>
  );
};

export default MessengerScreen;
