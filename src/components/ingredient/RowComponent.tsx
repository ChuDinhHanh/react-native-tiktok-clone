import { View, Text, ViewStyle, StyleProp, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { GlobalStyle } from '../../styles/GlobalStyle';

interface Props {
    justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
    style?: StyleProp<ViewStyle>;
    children: ReactNode;
    onPress?: () => void;
}

const RowComponent = (props: Props) => {
    const { children, style, justify, onPress } = props;

    const localStyle = [GlobalStyle.row, {
        justifyContent: justify ? justify : 'center'
    }, style]

    return (
        <>
            {
                onPress ? <TouchableOpacity
                    onPress={onPress}
                    style={localStyle as StyleProp<ViewStyle>}
                >
                    {children}
                </TouchableOpacity> : <View
                    style={localStyle as StyleProp<ViewStyle>}
                >
                    {children}
                </View>
            }
        </>
    )
}

export default RowComponent