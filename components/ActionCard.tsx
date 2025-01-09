import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebstie(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}> What`s new?</Text>
        </View>
        <Image
          source={require('../images/pexels-stijn-dijkstra-1306815-29988886.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            A trip to the Taj Mahal is a must for any tourist visiting India.
            Each year, millions travel to the town of Agra in the state of Uttar
            Pradesh to experience the gleaming, white mausoleum. Covered with a
            stunning floral inlay and Quranic inscriptions, the domed marble
            monument is renowned for the story of love that lies at its
            creation; the seventeenth-century Mughal emperor Shah Jahan built
            the stunning tomb for his second wife, Mumtaz Mahal, when she passed
            away.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebstie('https://daily.jstor.org/the-taj-mahal-today/')
            }>
            <Text>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    width: 400,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  elevated: {
    backgroundColor: 'lightgreen',
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'black',
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 300,
    width: 400,
    resizeMode: 'cover',
  },
  bodyContainer: {
    height: 180,
    width: 300,
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  footerContainer: {
    paddingLeft: 20,

    fontSize: 30,
    fontWeight: 'bold',
  },
});
