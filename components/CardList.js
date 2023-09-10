import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { data } from '../sampleData/sampleData'

const CardList = ({ onPressCard }) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onPressCard(item)}
          style={styles.cardContainer}
        >
          <Card containerStyle={styles.card}>
            <View style={styles.cardContent}>
              <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '50%', // Adjust as per your layout
    marginBottom: 16, // Adjust as per your layout
  },
  card: {
    alignItems: 'center', // Center content horizontally
    borderRadius: 10, // Add border radius to the card
    borderWidth: 1, // Add border width to the card
    borderColor: '#ccc', // Add border color to the card
  },
  cardContent: {
    alignItems: 'center', // Center content horizontally
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardImage: {
    height: 50, // Adjust the image height as needed
    width: 50
  },
});

export default CardList;
