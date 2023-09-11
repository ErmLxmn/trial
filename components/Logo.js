import { StyleSheet, View, Image  } from 'react-native';
import { Card } from "react-native-elements";
function Logo() {
  return (
    <View style={styles.logoContainer}>
        <Image style={styles.logoStyle} source={require('../assets/light.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff'
  }, 
  logoContainer:{
    alignItems: 'center',
    marginTop: 20,
  },
  logoStyle:{
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 4
  }
});

export default Logo