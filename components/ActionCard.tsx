import { StyleSheet, Text, View, Linking, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebstie(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>ActionCard</Text>
      <View style = {[styles.card, styles.elevated]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headerText}> What`s new?</Text>
        </View>
        <Image source = {{
            uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdaily.jstor.org%2Fthe-taj-mahal-today%2F&psig=AOvVaw2od1sFOJVK1MqQPEGueGia&ust=1736472851378000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODS2M-_54oDFQAAAAAdAAAAABAE'
        }} style = {styles.cardImage}></Image>
        <View style = {styles.bodyContainer}>
            <Text numberOfLines={3}>
            A trip to the Taj Mahal is a must for any tourist visiting India. Each year, millions travel to the town of Agra in the state of Uttar Pradesh to experience the gleaming, white mausoleum. Covered with a stunning floral inlay and Quranic inscriptions, the domed marble monument is renowned for the story of love that lies at its creation; the seventeenth-century Mughal emperor Shah Jahan built the stunning tomb for his second wife, Mumtaz Mahal, when she passed away.

            </Text>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebstie('https://daily.jstor.org/the-taj-mahal-today/')}>
                <Text>Learn More</Text>
            </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {  
    },
    card:{
  
    },
    elevated:{

    },
    headingContainer:{

    },
    headerText:{

    },
    cardImage:{
        height: 200,
       

    },
    bodyContainer:{

    },
    footerConatiner:{
        
    },
})