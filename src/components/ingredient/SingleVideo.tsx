import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React, { memo, useCallback, useRef, useState } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Video from 'react-native-video'
import { Colors } from '../../constants/Colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/Variables'
import BottomSingleVideoComponent from './BottomSingleVideoComponent'
import RightSingleVideoComponent from './RightSingleVideoComponent'

interface Props {
    item: any,
    index: number,
    currentIndex: number,
}

const SingleVideo = (props: Props) => {
    const { index, item, currentIndex } = props
    const [mute, setMute] = useState(false);
    const [pause, setPause] = useState(false);
    const [like, setLike] = useState(false);
    const videoRef = useRef<Video>(null);
    const [resizeMode, setResizeMode] = useState<"cover" | "contain" | "stretch" | "none">('cover');
    const bottomTabHeight = useBottomTabBarHeight();
    const tabBarHeight = StatusBar.currentHeight ?? 0;
    const heightOfWrapperVideo = WINDOW_HEIGHT - bottomTabHeight - tabBarHeight;

    const onBuffer = (event: any) => {
        console.log('buffering', event);
    }
    const onError = (event: any) => {
        console.log('error', event);
    }

    const handleOnUploadVideo = useCallback((data: any) => {
        const { naturalSize } = data;
        if (naturalSize) {
            const { width, height } = naturalSize;
            const videoAspectRatio = width / height;
            const screenAspectRatio = SCREEN_WIDTH / heightOfWrapperVideo;
            if (Math.floor(screenAspectRatio) >= Math.floor(videoAspectRatio)) {
                setResizeMode("cover");
            } else {
                setResizeMode("contain");
            }
        }
    }, [])

    const totalQtyComments = useCallback((a: any) => {
        return 1;
    }, [])

    return (
        <View
            style={[styles.wrapperVideoSession2, { height: heightOfWrapperVideo, }]}
        >
            <TouchableOpacity
                style={styles.wrapperVideoSession1}
                onPress={() => setPause(!pause)}
            >
                <Video
                    onLoad={handleOnUploadVideo}
                    ref={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode={resizeMode}
                    paused={currentIndex !== index || pause}
                    source={item.video}
                    // Tat am thanh
                    muted={mute}
                    style={styles.video}
                />
            </TouchableOpacity>
            {/* User and content */}
            <BottomSingleVideoComponent
                uid={item.user.uid}
                name={item.user.name}
                isOfficial={item.user.isOfficial}
                title={item.title}
                tags={item.tags}
            />
            {/* Options */}
            <RightSingleVideoComponent
                uid={item.user.uid}
                avatar={item.user.avatar}
                heartQty={item.likeQty}
                commentsQty={totalQtyComments(item.comments)}
                favoriteQty={item.favoriteQty}
                shareQty={item.shareQty}
                onClickButtonEvent={
                    () => { console.log("right option click") }
                } />
            {/* Icon pause */}

            {
                pause && <IconEntypo
                    style={styles.wrapperIconPause}
                    name='controller-play'
                    size={100}
                    color={Colors.WHITE}
                />
            }

        </View >
    )
}

const styles = StyleSheet.create({
    wrapperIconPause: {
        position: 'absolute',
        left: (SCREEN_WIDTH / 2) - 50,
        top: (SCREEN_HEIGHT / 2) - 100
    },
    video: {
        width: '100%',
        height: '100%'
    },
    wrapperVideoSession1: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    wrapperVideoSession2: {
        width: WINDOW_WIDTH,
        position: 'relative',
        backgroundColor: Colors.BLACK,
    }
})
export default memo(SingleVideo)