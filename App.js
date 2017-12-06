import React from 'react';
import {View, StatusBar} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {blue} from './utils/colors';
import {Constants} from 'expo';
import {setLocalNotification} from './utils/helpers';
import Navigator from './utils/Navigator';

function UdaciStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
