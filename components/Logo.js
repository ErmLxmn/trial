import { StyleSheet, View, Image, Text  } from 'react-native';
import { Card } from "react-native-elements";
function Logo() {
  return (
    <View style={styles.logoContainer}>
      <View>
        <Image style={styles.logoStyle} source={require('../assets/logo/logo-2.jpg')} resizeMode='center' />
        </View>
        <View>
        <Text style={styles.title}>Royal Casino</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Vertically align items
    justifyContent: 'center', // Horizontally align items to the right
    paddingRight: 20, // Add padding to move content to the right
    marginTop: 5,
    marginBottom: 5,
  },
  logoStyle: {
    width: 90, // Adjust the width as needed
    height: 90, // Adjust the height as needed
    borderRadius: 50
  },
  title: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    marginLeft: 10, // Add spacing between logo and text
    color: '#fff'
  },
});

export default Logo;