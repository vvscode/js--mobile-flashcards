import React from 'react';
import {Constants} from 'expo';
import {View, StatusBar} from 'react-native';

/* eslint-disable react/display-name */
export default ({backgroundColor, ...props}) =>(
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
