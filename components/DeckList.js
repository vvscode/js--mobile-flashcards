import React, {Component} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {receiveDecks} from '../actions';
import {fetchDecks} from '../utils/api';
import DecksListItem from './DecksListItem';
import * as colors from '../utils/colors';

class DeckList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;

    fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then((dd) => {
        /* do something */
      })
      .then(() => this.setState(() => ({ready: true})));
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
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default connect(mapStateToProps)(DeckList);
