import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import Button from '../components/Button';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');
  const isEmailValid = validateEmail(email);

  const handleSubmit = () => {
    Alert.alert('Thanks for subscribing, stay tuned!');
    setEmail('')
  }

  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#EEEEEE' }
          : { backgroundColor: '#222222' },
      ]}
    >
      <View style={styles.imageWrapper}>
        {colorScheme === 'light' ? (
          <Image
            style={styles.logo}
            source={require('../assets/little-lemon-logo-grey.png')}
          />
        ) : (
          <Image
            style={styles.logo}
            source={require('../assets/little-lemon-logo-grey-dark.png')}
          />
        )}
      </View>
      <Text
        style={[
          styles.title,
          colorScheme === 'light' ? { color: '#000000' } : { color: '#EEEEEE' },
        ]}
      >
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={[
          styles.input,
          colorScheme === 'light'
            ? {
                borderColor: '#111111',
                color: '#111111',
                backgroundColor: '#F8F8F8',
              }
            : {
                borderColor: '#EEEEEE',
                color: '#EEEEEE',
                backgroundColor: '#181818',
              },
        ]}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={'Type your email'}
        placeholderTextColor={colorScheme === 'light' ? '#666666' : '#AAAAAA'}
      />
      <Button
        onPress={handleSubmit}
        disabled={!isEmailValid}
      >
        Subscribe
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
});

export default SubscribeScreen;
