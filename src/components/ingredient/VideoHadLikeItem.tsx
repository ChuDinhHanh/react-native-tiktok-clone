import React, {memo, useRef} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Video from 'react-native-video';
import {Colors} from '../../constants/Colors';
import {SCREEN_WIDTH} from '../../constants/Variables';
import RowComponent from './RowComponent';
import Feather from 'react-native-vector-icons/Feather';
import TextComponent from './TextComponent';
import {getFormatQuantity} from '../../utils/FormatQuantity';
import SpaceComponent from './SpaceComponent';
interface Props {
  item: any;
  onPress: (id: number) => void;
}

const VideoHadLikeItem = (props: Props) => {
  console.log('===============VideoHadLikeItem=====================');
  const {item, onPress} = props;
  const videoRef = useRef<Video>(null);

  const onLoad = () => {
    videoRef?.current?.seek(1);
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPress(item.id)}>
      <View
        key={item.id}
        style={[styles.wrapperVideo, {width: SCREEN_WIDTH / 3 - 1}]}>
        <Video
          onLoad={onLoad}
          ref={videoRef}
          resizeMode={'cover'}
          muted={true}
          paused={true}
          source={item.video}
          style={styles.video}
        />
        {/* ViewQty */}
        <View style={styles.viewQty}>
          <RowComponent alignItems="center" justify="flex-start">
            <Feather name="play" size={15} color={Colors.WHITE} />
            <SpaceComponent width={3} />
            <TextComponent
              text={getFormatQuantity(Math.floor(Math.random() * 1000))}
            />
          </RowComponent>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  wrapperVideo: {
    height: 200,
    backgroundColor: Colors.BLACK,
    marginBottom: 1,
  },
  viewQty: {
    position: 'absolute',
    bottom: 0,
    left: 3,
  },
});
export default memo(VideoHadLikeItem);
