import ReadMore from '@fawazahmed/react-native-read-more'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'react-native-swiper-flatlist/src/themes'
import { Colors } from '../../constants/Colors'


const ContentSingleVideo = (props: { content: string, color?: string }) => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.root}>
                <ReadMore
                    seeMoreStyle={[styles.seeMoreAndLessStyle, { color: props.color ?? Colors.WHITE }]}
                    seeLessStyle={[styles.seeMoreAndLessStyle, { color: props.color ?? Colors.WHITE }]}
                    numberOfLines={1}
                    style={[styles.textStyle, { color: props.color ?? Colors.WHITE }]}
                >
                    {
                        props.content
                    }
                </ReadMore>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    root: {
        flex: 1,
        paddingVertical: 5
    },
    textStyle: {
        fontSize: 14,
    },
    seeMoreAndLessStyle: {
        fontWeight: 'bold'
    }
});


export default ContentSingleVideo
