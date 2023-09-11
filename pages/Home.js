import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  FlatList,
  StatusBar
} from "react-native";
import Logo from "../components/Logo";
import Carousel from "react-native-reanimated-carousel";
import { data, arr } from "../sampleData/sampleData";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomFlatList from "../components/CustomFlatList";

const width = Dimensions.get("window").width;

export default function Home(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState();

  const handleClick = function (item) {
    setSelectedId(item.id);
    setModalVisible(false);
    setOpacity(1);
    navigation.navigate("WebViewScreen", { url: data[item.id - 1].url});
  };

  const onPressCard = (item) => {
    setModalVisible(true);
    setOpacity(0.5);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/background-photo/bg-1.jpg")}>
        <Logo />
        <Image
          style={styles.jackpot}
          source={require("../assets/jackpot.jpg")}
          resizeMode="cover"
        />
        <Carousel
          width={width}
          autoPlay={false}
          data={data}
          style={[styles.carousel, { opacity: opacity }]}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onPressCard(item)}
              style={styles.cardContainer}
              activeOpacity={1}
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
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
              setOpacity(1);
            }}
          >
            <TouchableOpacity
              style={[styles.centeredView, styles.modalContainer]}
              activeOpacity={1}
              onPressOut={() => {
                setModalVisible(!modalVisible);
                setOpacity(1);
              }}
            >
              <View style={styles.modalView}>
                <View style={styles.header}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setOpacity(1);
                    }}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                </View>
                <View style={styles.listContainer}>
                  <FlatList
                    data={arr}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          style={styles.logoContainer}
                          onPress={() => handleClick(item)}
                        >
                          <Image style={styles.logoStyle} source={item.url} resizeMode="center" />
                          <Text style={styles.iconTitle}>Royal Casino</Text>
                        </TouchableOpacity>
                      );
                    }}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    numColumns={3}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
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
  carousel: {
    borderColor: "transparent",
  },
  cardContainer: {
    borderColor: "transparent",
  },
  cardTitle: {},
  cardImage: {
    padding: 0,
    height: width * 1.2,
    width: width - 10,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
  cardContent: {
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  jackpot: {
    alignSelf: "center",
    width: width - 5,
    height: width / 3.5,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    height: width + 85,
    marginTop: 130,
    width: width - 5,
    alignSelf: "center",
    backgroundColor: "transparent",
    // opacity: 0.5
  },
  button: {
    borderRadius: 100,
    height: 30,
    width: 30,
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "transparent",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalContainer: {},
  header: {
    width: "100%",
    alignItems: "flex-end",
    marginRight: 15,
    marginTop: 10,
  },
  iconsContainer: {
    opacity: 1,
  },
  listContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  logoStyle: {
    width: 80,
    height: 80,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  iconTitle:{
    color: '#fff'
  }
});
