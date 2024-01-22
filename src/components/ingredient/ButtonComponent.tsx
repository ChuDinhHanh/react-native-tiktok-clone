import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { Colors } from '../../constants/Colors';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';

interface Props {
    title: string;
    previousIcon?: ReactNode;
    styleButton: StyleProp<ViewStyle>;
    onPress: () => void;
    space?: number;
}
const ButtonComponent = (props: Props) => {
    const { title, previousIcon, styleButton, onPress, space } = props
    return (
        <RowComponent
            onPress={onPress}
            style={styleButton}
        >
            {previousIcon}
            <SpaceComponent width={space ?? 0} />
            <Text
                style={
                    styles.textImage
                }
            >
                {
                    title
                }
            </Text>
        </RowComponent>
    )
}

const styles = StyleSheet.create({
    textImage: {
        color: Colors.WHITE,
        fontSize: 18,
    }
})

export default ButtonComponent