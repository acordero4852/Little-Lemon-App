import * as React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonWrapper, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  disabled: {
    backgroundColor: '#999999',
    opacity: 0.5,
  },
  text: {
    fontSize: 18,
    color: '#EEEEEE',
    fontWeight: '500',
  },
});

export default Button;
