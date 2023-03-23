import { Button, StyleSheet, Text, View } from 'react-native'

import COLORS from '../constants/Colors'
import React from 'react'

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 20,
    color: COLORS.black
  }
})