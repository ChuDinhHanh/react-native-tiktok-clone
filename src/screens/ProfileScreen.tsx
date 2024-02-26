import {View, Text} from 'react-native';
import React from 'react';
import Container from '../components/ingredient/Container';
import {Colors} from '../constants/Colors';
import SessionComponent from '../components/ingredient/SessionComponent';
import DefaultAvatar from '../components/common/DefaultAvatar';
import ButtonAvatarComponent from '../components/ingredient/ButtonAvatarComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextComponent from '../components/ingredient/TextComponent';
import SpaceComponent from '../components/ingredient/SpaceComponent';
import RowComponent from '../components/ingredient/RowComponent';
import ButtonComponent from '../components/ingredient/ButtonComponent';
import CategoriesUserProfileScreenComponent from '../components/ingredient/CategoriesUserProfileScreenComponent';
import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../constants/Variables';
import {ScrollView} from 'react-native';

const ProfileScreen = () => {
  return (
    <Container isCenter={false} color={Colors.WHITE}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SessionComponent>
          <Container
            notFullHeightScreen={true}
            isCenter={true}
            color={Colors.WHITE}>
            {/* Avatar */}
            <ButtonAvatarComponent
              sizeIcon={30}
              iconAddRight={true}
              avatar="https://kynguyenlamdep.com/wp-content/uploads/2022/06/gai-xinh-cute-pho-mai-que.jpg"
              isFollowing
              name="Hanh"
              uid={1}
              addButton
              size={100}
            />
            <SpaceComponent height={10} />
            <TextComponent text="@Chu Dinh Hanh" color={Colors.BLACK} />
            <SpaceComponent height={20} />
            <RowComponent justify="center" alignItems="center">
              <ButtonComponent
                onPress={() => {}}
                paddingVertical={12}
                paddingHorizontal={15}
                borderRadius={8}
                backgroundColor={Colors.GREY_5}
                titleChildren={
                  <TextComponent text="Sửa hồ sơ" color={Colors.BLACK} />
                }
              />
              <SpaceComponent width={5} />
              <ButtonComponent
                onPress={() => {}}
                paddingVertical={12}
                paddingHorizontal={15}
                borderRadius={8}
                backgroundColor={Colors.GREY_5}
                titleChildren={
                  <TextComponent text="Chia sẻ hồ sơ" color={Colors.BLACK} />
                }
              />
              <SpaceComponent width={5} />
              <ButtonComponent
                onPress={() => {}}
                paddingVertical={12}
                paddingHorizontal={15}
                borderRadius={8}
                backgroundColor={Colors.GREY_5}
                previousIcon={
                  <AntDesign name="adduser" size={20} color={Colors.BLACK} />
                }
              />
            </RowComponent>
            <SpaceComponent height={10} />
            <ButtonComponent
              onPress={() => {}}
              backgroundColor={Colors.GREY_5}
              paddingHorizontal={10}
              borderRadius={2}
              titleChildren={
                <TextComponent text="+ Thêm tiểu sử" color={Colors.BLACK} />
              }
            />
          </Container>
          <SpaceComponent height={10} />
        </SessionComponent>
        <View style={styles.wrapperCategories}>
          <CategoriesUserProfileScreenComponent />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapperCategories: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT,
  },
});
export default ProfileScreen;
