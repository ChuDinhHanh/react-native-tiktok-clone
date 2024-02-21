import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
  id: number;
  uid: number;
  row?: boolean;
  isLiked: boolean;
  likeQty: number;
  fontSize?: number;
  color?: string;
  space?: number;
}

const ButtonLikeComponent = (props: Props) => {
  const {isLiked, likeQty, id, uid, fontSize, row, color, space} = props;
  const [_liked, _setLiked] = useState(isLiked);
  const [_likeQty, _setLikeQty] = useState(likeQty);

  const handleLikeEvent = () => {
    console.log('1/ call api like 2/ success');
    if (_liked) {
      _setLiked(false);
      _setLikeQty(_likeQty - 1);
    } else {
      _setLiked(true);
      _setLikeQty(_likeQty + 1);
    }
  };

  return (
    <>
      {row ? (
        <View style={styles.wrapperIconRightColum}>
          <ButtonComponent
            previousImage={
              <IconAntDesign
                name="heart"
                size={fontSize ?? 32}
                color={_liked ? Colors.PINK : Colors.WHITE}
              />
            }
            onPress={() => handleLikeEvent()}
          />
          <TextComponent text={`${_likeQty}`} fontSize={13} />
        </View>
      ) : (
        <RowComponent>
          {_liked ? (
            <ButtonComponent
              previousImage={
                <IconAntDesign
                  name="heart"
                  size={fontSize ?? 32}
                  color={Colors.PINK}
                />
              }
              onPress={() => handleLikeEvent()}
            />
          ) : (
            <ButtonComponent
              previousImage={
                <IconAntDesign
                  name="hearto"
                  size={fontSize ?? 32}
                  color={Colors.BLACK}
                />
              }
              onPress={() => handleLikeEvent()}
            />
          )}
          <SpaceComponent width={space} />
          <TextComponent text={`${_likeQty}`} fontSize={13} color={color} />
        </RowComponent>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapperIconRightColum: {
    alignItems: 'center',
  },
});

export default ButtonLikeComponent;
