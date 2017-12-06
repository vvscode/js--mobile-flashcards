import React from 'react';
import {View, Text} from 'react-native';

export default function QuizRemaining({n}) {
  return (
    <View>
      <Text>{n} cards remaining</Text>
    </View>
  );
}
