import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import SessionComponent from './SessionComponent'
import TextComponent from './TextComponent'
import RowComponent from './RowComponent'
import ButtonComponent from './ButtonComponent'
import ContentSingleVideo from './ContentSingleVideo'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import SpaceComponent from './SpaceComponent'

interface Props {
    uid: number,
    name: string,
    isOfficial: boolean,
    title: string,
    tags: [{ id: number, name: string }]
}
const BottomSingleVideoComponent = (props: Props) => {
    const { uid, title, isOfficial, name, tags } = props;
    console.log('==================BottomSingleVideoComponent==================');
    return (
        <View
            style={styles.wrapper}
        >
            <SessionComponent>
                {/* Name */}
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ width: '85%' }}>
                        <RowComponent
                            justify='flex-start'
                            onPress={() => console.log(uid)}
                        >
                            <TextComponent text={name} fontWeight='bold' fontSize={18} />
                            {
                                isOfficial && <><SpaceComponent width={5} />
                                    <IconFontAwesome name='check-circle' size={18} color={Colors.BLUE_1} /></>
                            }
                        </RowComponent>
                        {/* content */}
                        <ContentSingleVideo
                            content={title}
                        />
                        {/* Tag */}
                        <RowComponent
                            justify='flex-start'
                        >
                            {
                                tags?.map((item) => {
                                    return <ButtonComponent
                                        key={item.id}
                                        titleChildren={<TextComponent text={item.name + " "}
                                            color={Colors.WHITE} />}
                                        onPress={() => console.log(item.id)}
                                    />
                                })
                            }
                        </RowComponent>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                position: 'absolute',
                                right: 0,
                                bottom: 5
                            }}
                            source={require('../../assets/images/disc.png')} />
                    </View>
                </View>

            </SessionComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
    }
})
export default BottomSingleVideoComponent