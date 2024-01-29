import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Video from 'react-native-video';
import { Colors } from '../../constants/Colors';
import { SCREEN_WIDTH, WINDOW_WIDTH } from '../../constants/Variables';
import { getHeightOfWrapperVideo } from '../../utils/HeightOfVideo';
import ButtonComponent from './ButtonComponent';

interface Props {
    item: any,
    index: number,
    currentIndex: number,
}

const VideoComponent = (props: Props) => {
    console.log('==============VideoComponent-hanh  ======================');
    const { index, item, currentIndex } = props
    const [mute, setMute] = useState(false);
    const videoRef = useRef<Video>(null);
    const [resizeMode, setResizeMode] = useState<"cover" | "contain" | "stretch" | "none">('cover');
    const [pause, setPause] = useState(false);
    const heightOfWrapperVideo = getHeightOfWrapperVideo();
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

    return (
        <>
            <TouchableOpacity
                onPress={() => setPause(!pause)}
                style={styles.wrapperVideo}
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
            {/* Icon pause */}
            {
                pause && <ButtonComponent
                    onPress={() => setPause(!pause)}
                    previousIcon={<IconEntypo
                        style={[styles.buttonPause, { top: (heightOfWrapperVideo - 100) / 2 }]}
                        name='controller-play'
                        size={100}
                        color={Colors.WHITE}
                    />}
                />
            }
        </>
    )
}


const styles = StyleSheet.create({
    wrapperIconPause: {
        position: 'absolute',
    },
    wrapperVideo: {
        position: 'absolute',
        width: '100%',
        height: '100%',
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
    },
    buttonPause: {
        position: 'absolute',
        left: (SCREEN_WIDTH - 100) / 2,
    }
})

export default VideoComponent