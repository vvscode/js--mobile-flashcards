import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as colors from '../utils/colors';

export default function DecksListItem({title, questions}) {
  return (
    <View style={styles.deck}>
      <View>
        <Text style={{fontSize: 20}}>{title}</Text>
        <Text style={{fontSize: 16, color: colors.TEXT_COLOR}}>
          cards: {questions.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12,
  },
});
