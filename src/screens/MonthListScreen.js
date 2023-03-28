import { Button, StyleSheet, Text, View } from 'react-native'

import COLORS from '../constants/Colors'
import MesCard from '../components/MesCard'
import React from 'react'

const MonthListScreen = () => {
  const meses = useSelector(state => state.meses.meses)
  const dispatch = useDispatch()

  const handlerOnPressItem = (item) => {
    dispatch(addFavorite(item))
  }


  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={meses}
        renderItem={({ item }) => <MesCard mes={item} onPress={handlerOnPressItem} />}
        keyExtractor={item => item.id}

      />
    </View >
  )
}
 export default MonthListScreen;
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