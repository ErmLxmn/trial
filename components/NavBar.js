import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import WebViewScreen from '../pages/screen/WebViewScreen';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';
              return <Icon style={{marginTop: 4}} name={iconName} size={size} color='black' />;
            } 
            return null
          },
          tabBarLabel: () => null,
        })}>
        <Tab.Screen name="Home" component={Home}  options={{
            headerShown: false, 
          }}/>
          <Tab.Screen name="WebViewScreen" component={WebViewScreen}  options={{
            headerShown: false, 
            tabBarButton: () => null, 
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavBar