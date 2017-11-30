import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';

import DeckListItem from './DeckListItem';
import {getDecks} from '../../actions';

export class PureDeckList extends Component {
  componentDidMount() {
    this.props.dispatch(getDecks());
  }

  render() {
    return (
      <ScrollView>
        {Object.entries(this.props.decks).map(([key, deck]) => (
          <DeckListItem
            key={key}
            deck={deck}
            onPress={() => this.props.navigation.navigate('Deck', {title: deck.title})}
          />
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  decks: state,
});

export const DeckList = connect(mapStateToProps)(PureDeckList);
