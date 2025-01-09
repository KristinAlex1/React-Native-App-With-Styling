import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 'u1',
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'John@Doe.com',
            imageUrl: '...images/John.jpg'
        
        },
        {
            uid: 'u2',
            name: 'Jane Doe',
            phone: '123-456-7891',
            email: 'Jane@Doe.com,',
            imageUrl: '...images/Jane.jpg'
        },
        {   
            uid: 'u3',
            name: 'Joe Doe',
            phone: '123-456-7892',
            email: 'Joe@Doe.com,',
            imageUrl: '...images/Joe.jpg'

        }
    ]
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView style = {styles.container} scrollEnabled = {false}>
        {contacts.map(({uid, name, phone,email,imageUrl}) => (
            <View key={uid} style = {styles.userCard}>
                <Image source = {{
                    uri: imageUrl,
                }} style = {styles.userImage}/>
                <Text style = {styles.userName}>{name}</Text>
                <Text style = {styles.userPhone}>{phone}</Text>
                <Text style = {styles.userEmail}>{email}</Text>

            </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    container:{

    },
    userCard:{

    },
    userImage:{
        height:200,
        width:200,
        borderRadius: 50,
        resizeMode: 'contain',

    },
    userName:{

    },
    userPhone:{

    },
    userEmail:{

    },
})