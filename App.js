import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View, StatusBar} from 'react-native';

import configureStore from './utils/configureStore';
import Navigator from './utils/routes';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar animated={true} />
      <Navigator />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;
