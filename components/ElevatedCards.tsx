import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style = { styles.container}>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>
                to
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>
                Scroll
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>
                more...
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 8,
        fontSize: 24,
        fontWeight: 'bold',
      },
      container:{
        padding:8,
      },
      card:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        margin: 8,
        borderWidth: 1,
        borderRadius: 8,
      },
      cardElevated:{

        backgroundColor: '#B8B42D',
        elevation: 20,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#697A21',
      }
})