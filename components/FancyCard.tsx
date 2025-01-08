import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card,styles.elevated]}>
        <Image source = {require('../images/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg')
} style = {styles.cardImage}/>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Taj Mahal</Text>
            <Text style = {styles.cardLabel}>Agra,India</Text>
            <Text style = {styles.cardDescription}>The Taj Mahal, located in Agra, India, is a world-renowned symbol of love and one of the most iconic monuments in the world. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is a stunning example of Mughal architecture, blending elements of Persian, Indian, and Islamic styles.</Text>
            <Text style = {styles.cardFooter}></Text> 
          
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {

    },
    card:{},
    elevated:{},
    cardImage:{
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },
    cardBody:{},
    cardTitle:{},
    cardLabel:{},
    cardDescription:{},
    cardFooter:{},
})