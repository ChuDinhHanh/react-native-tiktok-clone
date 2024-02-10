import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import HeaderSearchScreenComponent from '../components/HeaderSearchScreenComponent'
import Container from '../components/ingredient/Container'
import SearchItemHistoryComponent from '../components/ingredient/SearchItemHistoryComponent'
import SessionComponent from '../components/ingredient/SessionComponent'
import SpaceComponent from '../components/ingredient/SpaceComponent'
import { Colors } from '../constants/Colors'
import { SearchData } from '../data/SearchData'
import PrintHistorySearch from '../components/ingredient/PrintHistorySearch'

const SearchScreen = () => {
  return (
    <Container
      isCenter={false}
      color={Colors.WHITE}
    >
      <SessionComponent>
        {/* Header */}
        <HeaderSearchScreenComponent />
        {/* History of search action */}
        <SpaceComponent height={12} />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <PrintHistorySearch />
        </ScrollView>
      </SessionComponent>
    </Container>
  )
}

export default SearchScreen