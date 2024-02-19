import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import SpaceComponent from './SpaceComponent';
import RowComponent from './RowComponent';

interface Props {
    previousIcon?: ReactNode;
    previousImage?: ReactNode;
    beHindIcon?: ReactNode;
    titleChildren?: ReactNode;
    onPress: () => void;
    SpaceComponentPrevious?: number;
    SpaceComponentBeHind?: number;
    backgroundColor?: string;
    textDecoration?: boolean;
    isActive?: boolean;
    color?: string;
    marginLeft?: number;
    padding?: number;
    borderRadius?: number;
}

const ButtonComponent = (props: Props) => {
    const { beHindIcon, marginLeft, previousImage, titleChildren, previousIcon, onPress, SpaceComponentPrevious, SpaceComponentBeHind, backgroundColor, textDecoration, isActive, color, borderRadius
        , padding } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ marginLeft, borderRadius }}
        >
            <View
                style={[{
                    backgroundColor: backgroundColor ?? 'transparent', padding, borderRadius
                }, styles.row]}
            >
                <RowComponent justify={undefined} alignItems='center'>
                    {previousIcon}
                    {previousImage}
                    <SpaceComponent width={SpaceComponentPrevious ?? 0}
                    />
                    {titleChildren}
                    {
                        textDecoration && isActive && <View
                            style={[styles.textDecorationBottom, { backgroundColor: color ?? Colors.WHITE }]}
                        />
                    }
                    <SpaceComponent width={SpaceComponentBeHind ?? 0} />
                    {beHindIcon}
                </RowComponent>
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