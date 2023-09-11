import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { useFonts } from "expo-font";

const height = Dimensions.get("window").height;

function Logo() {
  let [isLoading] = useFonts({
    "Chocolate" : require("../assets/fonts/Chocolate.ttf"),
  });
  
  if (!isLoading) {
    return undefined;
  }

  return (
    <View style={styles.logoContainer}>
      <View>
        <Image
          style={styles.logoStyle}
          source={require("../assets/logo/logo-2.jpg")}
          resizeMode="center"
        />
      </View>
      <View>
        <Text style={styles.title}>Royal Casino</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
    marginTop: '5%',
    marginBottom: '5%',
  },
  logoStyle: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  title: {
    fontSize: 40,
    marginLeft: 10,
    color: "#fff",
    fontFamily: "Chocolate",
  },
});

export default Logo;
