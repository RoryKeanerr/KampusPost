import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

type CustomInputProps = {
  label?: string;
  containerStyle?: object;
} & Pick<
  TextInputProps,
  'placeholder' | 'value' | 'onChangeText' | 'secureTextEntry' | 'keyboardType' | 'autoCapitalize' | 'autoCorrect'
>;

export default function CustomInput({
  label,
  containerStyle,
  ...textInputProps
}: CustomInputProps) {
  return (
    <View style={[styles.container, containerStyle]}> 
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor="#9AA0A6"
        style={styles.input}
        {...textInputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: '#202124',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#DADCE0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    color: '#202124',
    fontSize: 16,
  },
});


