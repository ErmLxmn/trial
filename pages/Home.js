import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import CardList from '../components/CardList';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';

export default function Home() {
  const navigation = useNavigation();
  const handleCardPress = (card) => {
    navigation.navigate('WebViewScreen', { url: card.url });
  };

  return (
    <View style={styles.container}>
      <Logo/>
      <View style={styles.scrollViewContainerStyle}>
        <Text style={styles.heading}>Games?</Text>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
          <CardList onPressCard={handleCardPress} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff'
  },
  scrollViewContainerStyle:{
    alignSelf: 'center',
    marginTop: 20,
    height: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
