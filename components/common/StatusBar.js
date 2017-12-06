import React from 'react';
import {Constants} from 'expo';
import {View, StatusBar as RnStatusBar} from 'react-native';

export const StatusBar = ({backgroundColor, ...props}) =>(
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <RnStatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
