import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import Button from '../components/Button';

const LoginScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#EEEEEE' }
          : { backgroundColor: '#222222' },
      ]}
    >
      <Text
        style={[
          styles.headerText,
          colorScheme === 'light' ? { color: '#111111' } : { color: '#EEEEEE' },
        ]}
      >
        Welcome to Little Lemon
      </Text>
      {isLoggedIn && (
        <Text
          style={[
            styles.regularText,
            colorScheme === 'light'
              ? { color: '#111111' }
              : { color: '#EEEEEE' },
          ]}
        >
          You are now logged in{' '}
        </Text>
      )}
      {!isLoggedIn && (
        <>
          <Text
            style={[
              styles.regularText,
              colorScheme === 'light'
                ? { color: '#111111' }
                : { color: '#EEEEEE' },
            ]}
          >
            Login to continue{' '}
          </Text>
          <TextInput
            style={[
              styles.inputBox,
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
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
            placeholderTextColor={
              colorScheme === 'light' ? '#666666' : '#AAAAAA'
            }
          />
          <TextInput
            style={[
              styles.inputBox,
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
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
            placeholderTextColor={
              colorScheme === 'light' ? '#666666' : '#AAAAAA'
            }
          />
          <Button onPress={() => setIsLoggedIn(!isLoggedIn)}>Log in</Button>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerText: {
    paddingTop: 40,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  inputBox: {
    height: 40,
    marginVertical: 18,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
