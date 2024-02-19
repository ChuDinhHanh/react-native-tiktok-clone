import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import { BannerData } from '../../data/BannerData'
import SessionComponent from './SessionComponent'
import TextComponent from './TextComponent'

const VoucherComponent = (props: { padding?: number }) => {
    return (
        <View style={[styles.wrapperBanner, { paddingVertical: props.padding ?? 10 }]}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={BannerData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => { console.log(item.id) }}
                    >
                        <View style={styles.bannerItem}>
                            <SessionComponent padding={5}>
                                <TextComponent text={item.title} color={Colors.PINK} fontWeight='bold' />
                                <TextComponent text={item.descriptions} color={Colors.GREY} />
                            </SessionComponent>
                            <View
                                style={styles.wrapperNewOfferTitle}
                            >
                                <TextComponent text='Đã nhận' color={Colors.PINK} fontSize={12} />
                            </View>
                            <View style={[styles.dot, styles.dotLeft]} />
                            <View style={[styles.dot, styles.dotRight]} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperBanner: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 0.5,
    },
    bannerItem: {
        backgroundColor: 'rgb(254 242 250)',
        width: 200,
        height: 70,
        justifyContent: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        marginRight: 10
    },
    dot: {
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: Colors.WHITE,
        top: 30
    },
    dotLeft: {
        left: -5,
    },
    dotRight: {
        right: -5,
    },
    wrapperNewOfferTitle: {
        position: 'absolute',
        top: 0,
        left: 2
    }
})

export default VoucherComponent