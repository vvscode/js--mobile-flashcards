import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const getCardsNumber = (deck) => (deck.questions && deck.questions.length) || 0;

const DeckListItem = ({deck, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.head}>{deck.title}</Text>
    <Text style={styles.sub}>{`${getCardsNumber(deck)} cards`}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  head: {
    fontSize: 18,
  },
  sub: {
    color: 'gray',
  },
});

export default DeckListItem;
