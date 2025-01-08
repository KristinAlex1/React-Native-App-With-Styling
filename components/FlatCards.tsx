import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText} >Flat Cards</Text>
      <View style = {styles.container}>
        <View style = {[styles.card,styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style = {[styles.card,styles.cardTwo]}>
            <Text>Black</Text>
        </View>
        <View style = {[styles.card,styles.cardThree]}>
            <Text>White</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: 5,
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 120,
    borderRadius: 8,
    margin: 8,
  },
  cardOne:{
    backgroundColor: "#DD403A",
    

  },
  cardTwo:{
    backgroundColor: "#3E363F",
    

  },
  cardThree:{
    backgroundColor: "#FFFCE8",
    

  }

})