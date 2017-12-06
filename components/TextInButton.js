import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as colors from '../utils/colors';
import {isIOS} from '../utils/platform';

const styles = StyleSheet.create({
  iosBtn: {
    backgroundColor: colors.BACKGROUND_DARK,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidBtn: {
    backgroundColor: colors.BACKGROUND_DARK,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.BACKGROUND_LIGHT,
    fontSize: 22,
    textAlign: 'center',
  },
});

const btnStyle = isIOS ? styles.iosBtn : styles.AndroidBtn;

const TextInButton = ({children, onPress, style = {}}) => (
  <TouchableOpacity onPress={onPress} style={[btnStyle, style]}>
    <Text style={[styles.btnText, style]}>{children}</Text>
  </TouchableOpacity>
);

export default TextInButton;


