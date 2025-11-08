/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text, TouchableOpacity } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import LoginScreen from './components/LoginScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [screen, setScreen] = useState<'menu' | 'login'>('menu');

  if (screen === 'login') {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KampüsPost’a Hoş Geldiniz!</Text>

      <View style={styles.actions}> 
        <TouchableOpacity style={styles.button} onPress={() => setScreen('login')}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#202124',
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  actions: {
    width: '100%',
    maxWidth: 320,
    marginTop: 24,
    gap: 12,
  },
  button: {
    backgroundColor: '#1A73E8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default App;
