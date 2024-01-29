import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const SessionComponent = (props: Props) => {
    const { children } = props;
    return (
        <View
            style={styles.wrapper}>
            {
                children
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 16
    }
})
export default SessionComponent