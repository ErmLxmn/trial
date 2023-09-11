import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';
import Logo from '../../components/Logo';

function WebViewScreen({ route }) {
  const { url } = route.params;
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

   // Reset isLoading to true when the URL changes
   useEffect(() => {
    setIsLoading(true);
  }, [url]);

  const handleWebViewLoad = () => {
    setIsLoading(false); // Set loading state to false when the WebView finishes loading
  };
  
  return (
    <ImageBackground source={require('../../assets/background-photo/bg-1.jpg')} style={styles.container}>
      <Logo/>

      {isLoading && (
        <ActivityIndicator size="100" color="#E6E6FA" style={styles.spinner} />
      )}
        <WebView
          source={{ uri: url }}
          style={ !isLoading ? styles.webViewStyleActive : styles.webViewStyleHidden}
          onLoad={handleWebViewLoad} // Call handleWebViewLoad when the WebView finishes loading
        />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  webViewStyle: {
    flex: 1,
  },
  webViewStyleActive: {
    flex: 1,
  },
  webViewStyleHidden: {
    display: 'none'
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  },
});

export default WebViewScreen;
