import ReadMore from '@fawazahmed/react-native-read-more'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const ContentSingleVideo = (props: { content: string }) => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.root}>
                <ReadMore
                    seeMoreStyle={styles.seeMoreAndLessStyle}
                    seeLessStyle={styles.seeMoreAndLessStyle}
                    numberOfLines={1}
                    style={styles.textStyle}
                >
                    {
                        props.content
                    }
                </ReadMore>
            </View>
        </SafeAreaView>
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
        color: 'white'
    },
    seeMoreAndLessStyle: {
        color: 'white', fontWeight: 'bold'
    }
});


export default ContentSingleVideo
