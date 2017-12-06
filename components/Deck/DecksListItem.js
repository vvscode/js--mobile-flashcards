import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as colors from '../../utils/colors';

const DecksListItem = ({title, questions}) =>(
  <View style={styles.deck}>
    <Text style={styles.deckTitle}>{title}</Text>
    <Text style={styles.deckCardsCounter}>{questions.length}</Text>
  </View>
);

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deckTitle: {
    fontSize: 20,
  },
  deckCardsCounter: {
    fontSize: 20, color: colors.TEXT_COLOR,
  },
});

export default DecksListItem;
