import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {DeckList} from '../components/Deck';

export class DeckListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
