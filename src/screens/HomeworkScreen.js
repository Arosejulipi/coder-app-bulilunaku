import { StyleSheet, Text, View } from 'react-native'

import COLORS from '../constants/Colors'
import React from 'react'

const TypesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>TypesScreen</Text>
    </View>
  )
}

export default TypesScreen

const styles = StyleSheet.create({
  screen: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    color: COLORS.black
  }
})