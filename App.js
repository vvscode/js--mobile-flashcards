import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import * as colors from './utils/colors';
import {setLocalNotification} from './utils/helpers';
import Navigator from './utils/Navigator';
import StatusBar from './components/StatusBar';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={colors.BACKGROUND_COLOR} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
