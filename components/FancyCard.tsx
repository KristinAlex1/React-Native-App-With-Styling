import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card,styles.elevated]}>
        <ScrollView>
        <Image source = {require('../images/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg')
} style = {styles.cardImage}/>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Taj Mahal</Text>
            <Text style = {styles.cardLabel}>Agra, India</Text>
            <Text style = {styles.cardDescription}>The Taj Mahal, located in Agra, India, is a world-renowned symbol of love and one of the most iconic monuments in the world. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is a stunning example of Mughal architecture, blending elements of Persian, Indian, and Islamic styles.</Text>
            <Text style = {styles.cardFooter}> 12 Mins Away </Text>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card:{
        height: 600,
        margin: 8,
        borderRadius: 8,

    },
    elevated:{
        backgroundColor: 'lightblue',
        shadowColor: 'black',
    },
    cardImage:{
        height: 300,
        width: 400,
        resizeMode: 'cover',
        paddingHorizontal: 8,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 20,
    },
    cardBody:{
        
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        

    },
    cardTitle:{
        fontWeight: 'bold',
        height: 30,
        width:100,
        fontSize: 20,
    },
    cardLabel:{
        
        height: 40,
        width:100,
        fontSize: 20,
    },
    cardDescription:{
        
        height: 180,
        width:300,
        fontSize: 15,
        paddingHorizontal: 8,
    },
    cardFooter:{
        fontSize: 15,
        fontWeight: 'bold',
        height: 50,
    },
})