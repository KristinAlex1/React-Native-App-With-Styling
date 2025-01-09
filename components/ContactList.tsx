import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 'u1',
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'John@Doe.com',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUuYcnZ-xqlGZiDZvuUy_iLx3Nj6LSaZSzQ&s'
        
        },
        {
            uid: 'u2',
            name: 'Jane Doe',
            phone: '123-456-7891',
            email: 'Jane@Doe.com,',
            imageUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {   
            uid: 'u3',
            name: 'Joe Doe',
            phone: '123-456-7892',
            email: 'Joe@Doe.com,',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQi2Mm5P8j09P4hPKa1B-t9eIOHzHmR7IBkw&s'

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
                <View>
                <Text style = {styles.userName}>{name}</Text>
                <Text style = {styles.userPhone}>{phone}</Text>
                <Text style = {styles.userEmail}>{email}</Text>

                </View>
                

            </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    container:{
        paddingHorizontal:20,
        marginBottom: 20,

    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 350,
        marginLeft: 10,
        marginRight: 20,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: '#FCDFA6',
        marginTop: 10,


    },
    userImage:{
        marginVertical: 10,
        height:120,
        width:120,
        borderRadius: 60,
        marginRight: 20,
        resizeMode: 'contain',
        marginLeft: 10,

    },
    userName:{
        fontWeight: 'bold',
        fontSize: 20,

    },
    userPhone:{
        fontSize: 15,

    },
    userEmail:{
        fontSize: 15,

    },
})