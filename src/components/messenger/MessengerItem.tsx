import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import DefaultAvatar from '../common/DefaultAvatar';
import RowComponent from '../ingredient/RowComponent';
import SpaceComponent from '../ingredient/SpaceComponent';
import TextComponent from '../ingredient/TextComponent';

const MessengerItem = (props: {item: any}) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <RowComponent justify="flex-start">
        {item.isSender ? (
          <>
            {/* Content */}
            <View style={styles.wrapper_messenger}>
              <View style={styles.wrapper_messenger_tier1_not_sender}>
                <View style={styles.wrapper_messenger_Tier2}>
                  <TextComponent text={item.messenger} color={Colors.BLACK} />
                </View>
              </View>
            </View>
            <SpaceComponent width={(SCREEN_WIDTH / 100) * 2} />
            {/* Avatar */}
            <View style={styles.wrapper_avatar}>
              <DefaultAvatar name={item.user.name} image={item.user.url} />
            </View>
          </>
        ) : (
          <>
            {/* Avatar */}
            <View style={styles.wrapper_avatar}>
              <DefaultAvatar name={item.user.name} image={item.user.url} />
            </View>
            <SpaceComponent width={(SCREEN_WIDTH / 100) * 2} />
            {/* Content */}
            <View style={styles.wrapper_messenger}>
              <View style={styles.wrapper_messenger_tier1_is_sender}>
                <View style={styles.wrapper_messenger_Tier2}>
                  <TextComponent text={item.messenger} color={Colors.BLACK} />
                </View>
              </View>
            </View>
          </>
        )}
      </RowComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper_messenger: {
    width: '88%',
  },
  wrapper_messenger_tier1_not_sender: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  wrapper_messenger_tier1_is_sender: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wrapper_messenger_Tier2: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: Colors.GREY_PALE,
  },
  wrapper_avatar: {
    width: '10%',
  },
  container: {
    marginVertical: 10,
    width: '100%',
  },
});
export default MessengerItem;
