import {StatusBar, Platform} from 'react-native';

const isAndroid = Platform.OS === 'ios';

export const APPBAR_HEIGHT = isAndroid ? 55 : 45;

export const STATUSBAR_HEIGHT = isAndroid ? StatusBar.currentHeight || 0 : 20;

export const HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
