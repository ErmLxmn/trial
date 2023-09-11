import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";
import Carousel from "react-native-reanimated-carousel";
import { Card } from "react-native-elements";
import { data } from "../sampleData/sampleData";

const width = Dimensions.get("window").width;

export default function Home() {
  const navigation = useNavigation();

  const onPressCard = (card) => {
    navigation.navigate("WebViewScreen", { url: card.url });
  };

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/background-photo/bg-1.jpg')} >
      <Logo />
      <Image style={styles.jackpot} source={require('../assets/jackpot.jpg')} resizeMode="stretch"/>
      <Carousel
        width={width}
        autoPlay={false}
        data={data}
        style={styles.carousel}
        renderItem={({ index, item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onPressCard(item)}
            style={styles.cardContainer}
          
          >
              <View style={styles.cardContent}>
                <Image
                  source={item.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />              
              </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#fff",
  },
  carousel:{
   borderColor :'transparent'
  },
  cardContainer: {
    borderColor :'transparent'
  },
  cardTitle: {
    
  },
  cardImage: {
    padding: 0,
    height: width * 1.2,
    width : width - 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10
  },
  cardContent: {
    backgroundColor : 'transparent',
    alignSelf: 'center',
   
  },
  jackpot : {
    alignSelf : 'center',
    width : width - 5,
    height: width / 3.5,
    borderRadius: 60
  }
});
