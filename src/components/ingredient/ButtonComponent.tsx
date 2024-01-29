import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import SpaceComponent from './SpaceComponent';

interface Props {
    previousIcon?: ReactNode;
    previousImage?: ReactNode;
    titleChildren?: ReactNode;
    onPress: () => void;
    space?: number;
    backgroundColor?: string;
    textDecoration?: boolean;
    isActive?: boolean;
    color?: string;
    marginLeft?: number;
}
const ButtonComponent = (props: Props) => {
    const { marginLeft, previousImage, titleChildren, previousIcon, onPress, space, backgroundColor, textDecoration, isActive, color } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ marginLeft }}
        >
            <View
                style={[{
                    backgroundColor: backgroundColor ?? 'transparent'
                }, styles.row]}
            >
                <View>
                    {previousIcon}
                    {previousImage}
                    <SpaceComponent width={space ?? 0}
                    />
                    {titleChildren}
                    {
                        textDecoration && isActive && <View
                            style={[styles.textDecorationBottom, { backgroundColor: color ?? Colors.WHITE }]}
                        />
                    }
                </View>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    textImage: {
        color: Colors.WHITE,
        fontSize: 18,
    },
    textDecorationBottom: {
        alignSelf: 'center',
        width: 35,
        height: 3.5,
        marginTop: 7,
        borderRadius: 100,
        position: 'absolute',
        bottom: -10
    },
    row: {
        flexDirection: 'row',
    }
})

export default ButtonComponent