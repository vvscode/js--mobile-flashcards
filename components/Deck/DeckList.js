import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {decksGet} from '../../actions/index';
import {fetchDecks} from '../../utils/api';
import DecksListItem from './DecksListItem';
import * as colors from '../../utils/colors';
import {isIOS} from '../../utils/platform';

export class DeckList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;

    fetchDecks()
      .then((decks) => dispatch(decksGet(decks)));
  }
  renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('IndividualDeckView', item)}
      >
        <DecksListItem title={item.title} questions={item.questions} />
      </TouchableOpacity>
    </View>
  );

  render() {
    const {decks} = this.props;
    return (
      <View>
        <FlatList
          data={Object.values(decks).sort((a, b) => a.title > b.title)}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          style={styles.list}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state,
});

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: colors.BACKGROUND_LIGHT,
    borderBottomRightRadius: isIOS ? 20 : 2,
    borderTopRightRadius: isIOS ? 20 : 2,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    shadowRadius: 1,
    shadowOpacity: 0.5,
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
});

export const DeckListConnected = connect(mapStateToProps)(DeckList);
