import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <View >
      <SafeAreaView >
        <ScrollView >
          <FlatCards/>
          <ElevatedCards/>
          <FancyCard/>
          <FancyCard/>
        </ScrollView>
      </SafeAreaView>



    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
  }
})