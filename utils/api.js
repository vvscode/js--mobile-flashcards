import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "DECKS_STORAGE_KEY";

export const getDeckForStorage = (title = "", cards = []) =>
  JSON.stringify({
    [title]: {
      title,
      cards
    }
  });

export const getDecks = _ =>
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then(res => JSON.parse(res));

export const createDeck = title =>
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, getDeckForStorage(title, []));

export const createCard = (title, card) =>
  getDecks().then(decks =>
    AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      getDeckForStorage(title, [...decks[title].cards, card])
    )
  );
