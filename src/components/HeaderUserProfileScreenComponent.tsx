import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/Colors';
import ButtonComponent from './ingredient/ButtonComponent';
import RowComponent from './ingredient/RowComponent';
import SessionComponent from './ingredient/SessionComponent';
import TextComponent from './ingredient/TextComponent';

const HeaderUserProfileScreenComponent = () => {
  return (
    <SessionComponent backgroundColor={Colors.WHITE}>
      <RowComponent justify="space-between" alignItems="center">
        <ButtonComponent
          onPress={() => {}}
          previousIcon={<Feather name="menu" size={30} color={Colors.BLACK} />}
        />
        <ButtonComponent
          beHindIcon={
            <FontAwesome name="chevron-down" size={18} color={Colors.BLACK} />
          }
          onPress={() => {}}
          SpaceComponentBeHind={5}
          titleChildren={
            <TextComponent
              fontSize={20}
              text="Chu Dinh Hanh"
              color={Colors.BLACK}
              fontWeight="bold"
            />
          }
        />
        <ButtonComponent
          onPress={() => {}}
          previousIcon={
            <Ionicons name="footsteps-outline" size={30} color={Colors.BLACK} />
          }
        />
      </RowComponent>
    </SessionComponent>
  );
};

export default HeaderUserProfileScreenComponent;
