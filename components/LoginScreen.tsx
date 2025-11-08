import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from './CustomInput';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>
        <Text style={styles.subtitle}>Lütfen e‑posta ve şifrenizi giriniz</Text>

        <View style={styles.form}> 
          <CustomInput
            label="E-posta"
            placeholder="E-posta"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <CustomInput
            label="Şifre"
            placeholder="Şifre"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />

          <View style={styles.inlineActions}>
            <TouchableOpacity onPress={() => setShowPassword(v => !v)}>
              <Text style={styles.linkText}>{showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* placeholder */ }}>
              <Text style={styles.mutedLink}>Şifremi unuttum</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              (!email || !password) && styles.buttonDisabled,
            ]}
            disabled={!email || !password}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#202124',
  },
  subtitle: {
    marginTop: -12,
    marginBottom: 16,
    color: '#5f6368',
    fontSize: 14,
  },
  form: {
    width: '100%',
    maxWidth: 420,
  },
  inlineActions: {
    marginTop: -4,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    color: '#1A73E8',
    fontWeight: '600',
  },
  mutedLink: {
    color: '#5f6368',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#1A73E8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#AECBFA',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});


