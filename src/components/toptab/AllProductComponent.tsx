import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {NewOfferData} from '../../data/NewOfferData';
import ProductItem from '../ingredient/ProductItem';

interface Props {
  onPressOnProduct: (idProduct: number) => void;
}

const AllProductComponent = (props: Props) => {
  const {onPressOnProduct} = props;
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item: any) => item.id}
        columnWrapperStyle={styles.container}
        numColumns={2}
        data={NewOfferData}
        extraData={NewOfferData}
        // ItemSeparatorComponent={}
        renderItem={({item}) => (
          <ProductItem item={item} onPressOnProduct={onPressOnProduct} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});
export default AllProductComponent;
