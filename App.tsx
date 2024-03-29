import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from './src/redux/Store'
import Router from './src/router/Router'

const App = () => {
  return (
    <NavigationContainer >
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  )
}

export default App