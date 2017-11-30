import React, {Component} from 'react';

import {Deck} from '../components/Deck';

export class DeckScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {
      title: params.title,
    };
  };

  render() {
    return <Deck navigation={this.props.navigation} />;
  }
}
