import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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
      <Logo />
      <Text style={styles.heading}>Sample Shelves</Text>
      <Carousel
        width={width}
        autoPlay={false}
        data={data}
        renderItem={({ index, item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onPressCard(item)}
            style={styles.cardContainer}
          
          >
            <Card containerStyle={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  source={item.image}
                  style={styles.cardImage}
                  resizeMode="center"
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
    margin: 20
  },
  cardContainer: {
    height: '90%',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    flex: 1, 
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    borderRadius: 10,
    height: "80%",
    margin: 10
  },
});
