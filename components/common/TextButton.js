import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const TextButton = ({title, onPress, disabled = false, buttonStyle = {}, textStyle = {}}) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} disabled={disabled} onPress={onPress}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
  },
  buttonText: {
    fontSize: 16,
  },
});
