import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import { Colors } from '../../constants/Colors'
import { SCREEN_HEIGHT, WINDOW_HEIGHT } from '../../constants/Variables'
import ButtonComponent from './ButtonComponent'
import TextComponent from './TextComponent'
import SpaceComponent from './SpaceComponent'

interface Props {
    uid: number,
    avatar: string;
    heartQty: number;
    commentsQty: number;
    favoriteQty: number;
    shareQty: number;
    onClickButtonEvent: (idButton: number) => void
}

const RightSingleVideoComponent = (props: Props) => {
    const { avatar, commentsQty, favoriteQty, heartQty, shareQty, uid, onClickButtonEvent } = props;
    const bottomTabHeight = useBottomTabBarHeight();
    const tabBarHeight = StatusBar.currentHeight ?? 0;
    const heightOfWrapperVideo = WINDOW_HEIGHT - bottomTabHeight - tabBarHeight;

    return (
        <View
            style={{
                position: 'absolute',
                right: 0,
                bottom: 87,
                height: (SCREEN_HEIGHT - bottomTabHeight - 105) / 2,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 16
            }}
        >

            <ButtonComponent
                previousImage={
                    <View>
                        <Image
                            style={{ width: 45, height: 45, borderRadius: 100 }}
                            source={{ uri: "https://images2.thanhnien.vn/528068263637045248/2023/7/17/b479c772f6c4269a7fd5-1689571963164741064653.jpg" }} />
                        <Image
                            style={{
                                position: 'absolute',
                                width: 25,
                                height: 25,
                                bottom: -5,
                                left: (45 - 25) / 2
                            }}
                            source={require("../../assets/images/plus-button.png")}
                        />
                    </View>
                }
                onPress={() => onClickButtonEvent(1)}
            />
            <SpaceComponent height={5} />
            <View
                style={styles.wrapperIconRightColum}
            >
                <ButtonComponent
                    previousImage={
                        <Image style={{ width: 35, height: 35 }} source={require("../../assets/images/heart.png")} />
                    }
                    onPress={() => onClickButtonEvent(1)}
                />
                <TextComponent text={`${heartQty}`} fontSize={13} />
            </View>
            <View
                style={styles.wrapperIconRightColum}
            >
                <ButtonComponent
                    previousImage={
                        <Image style={{ width: 35, height: 35 }} source={require("../../assets/images/message-circle.png")} />
                    }
                    onPress={() => onClickButtonEvent(1)}
                />
                <TextComponent text={`${commentsQty}`} fontSize={13} />
            </View>
            <View
                style={styles.wrapperIconRightColum}
            >
                <ButtonComponent
                    previousIcon={
                        <IconFontisto name='favorite' size={30} color={Colors.WHITE} />
                    }
                    onPress={() => onClickButtonEvent(1)}
                />
                <TextComponent text={`${favoriteQty}`} fontSize={13} />
            </View>
            <View
                style={styles.wrapperIconRightColum}
            >
                <ButtonComponent
                    previousImage={
                        <Image style={{ width: 35, height: 35 }} source={require("../../assets/images/reply.png")} />
                    }
                    onPress={() => onClickButtonEvent(1)}
                />
                <TextComponent text={`${shareQty}`} fontSize={13} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperIconRightColum: {
        alignItems: 'center'
    }
})

export default RightSingleVideoComponent