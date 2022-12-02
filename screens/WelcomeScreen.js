import React from 'react';
import Button from '../components/Button';
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#EEEEEE' }
          : { backgroundColor: '#222222' },
      ]}
    >
      <View style={styles.contentContainer}>
        {colorScheme === 'light' ? (
          <Image
            style={styles.logo}
            source={require('../assets/little-lemon-logo.png')}
          />
        ) : (
          <Image
            style={styles.logo}
            source={require('../assets/little-lemon-logo-dark.png')}
          />
        )}
        <Text
          style={[
            styles.title,
            colorScheme === 'light'
              ? { color: '#111111' }
              : { color: '#EEEEEE' },
          ]}
        >
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Subscribe');
        }}
      >
        Newsletter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
