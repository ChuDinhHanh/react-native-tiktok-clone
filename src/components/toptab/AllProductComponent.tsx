import React from 'react'
import { FlatList, View } from 'react-native'
import { NewOfferData } from '../../data/NewOfferData'
import ProductItem from '../ingredient/ProductItem'

interface Props {
    onPressOnProduct: (idProduct: number) => void
}

const AllProductComponent = (props: Props) => {
    const { onPressOnProduct } = props;
    return (
        <View>
            <FlatList
                scrollEnabled={false}
                keyExtractor={(item: any) => item.id}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
                data={NewOfferData}
                extraData={NewOfferData}
                // ItemSeparatorComponent={}
                renderItem={({ item }) => (
                    <ProductItem item={item} onPressOnProduct={onPressOnProduct} />
                )}
            />
        </View>
    )
}

export default AllProductComponent