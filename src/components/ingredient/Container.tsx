import { View, Text, ViewStyle, StyleProp, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors } from '../../constants/Colors';

interface Props {
    children: ReactNode
}
const Container = (props: Props) => {
    const { children } = props;
    return (
        <View
            style={styles.iconContainer}
        >
            {
                children
            }
        </View>
    )
}


const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: Colors.BLACK,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Container

