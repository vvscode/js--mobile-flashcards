import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as colors from '../../utils/colors';

export const TextButton = ({children, onPress, style = {}}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.textButton, style]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  textButton: {
    textAlign: 'center',
    color: colors.TEXT_COLOR,
  },
});
