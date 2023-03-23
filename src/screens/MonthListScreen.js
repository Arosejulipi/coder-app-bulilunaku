import { Button, StyleSheet, Text, View } from 'react-native'

import COLORS from '../constants/Colors'
import React from 'react'

const MonthListScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>MonthListScreen</Text>
    </View>
  )
}

export default MonthListScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 20,
    color: COLORS.black
  }
})