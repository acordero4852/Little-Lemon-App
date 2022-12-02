import * as React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuItems from './screens/MenuItems';
import LoginScreen from './screens/LoginScreen';
import SubscribeScreen from './screens/SubscribeScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <>
      <NavigationContainer theme={ colorScheme === 'light' ? DefaultTheme : DarkTheme }>
        <View style={styles.container}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'Welcome') {
                  iconName = 'ios-home';
                } else if (route.name === 'Login') {
                  iconName = 'ios-enter';
                } else if (route.name === 'Menu') {
                  iconName = 'ios-list';
                } else if (route.name === 'Subscribe') {
                  iconName = 'ios-newspaper';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: colorScheme === 'light' ? '#495E57' : '#F4CE14',
              tabBarInactiveTintColor: colorScheme === 'light' ? '#888888' : '#AAAAAA',
            })}
            initialRouteName="Welcome"
          >
            <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ headerTitleStyle: { fontSize: 24 } }}/>
            <Tab.Screen name="Login" component={LoginScreen} options={{ headerTitleStyle: { fontSize: 24 } }}/>
            <Tab.Screen name="Menu" component={MenuItems} options={{ headerTitleStyle: { fontSize: 24 } }}/>
            <Tab.Screen
              name="Subscribe"
              component={SubscribeScreen}
              options={{ headerTitleStyle: { fontSize: 24 } }}
            />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
