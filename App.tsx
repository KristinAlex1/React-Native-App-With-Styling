import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <View >
      <SafeAreaView >
        <ScrollView >
          <FlatCards/>
          <ElevatedCards/>
          <FancyCard/>
          <ContactList/>
          <ActionCard/>
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