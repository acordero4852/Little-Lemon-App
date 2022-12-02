import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by LittleLemon, 2022{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default LittleLemonFooter;
