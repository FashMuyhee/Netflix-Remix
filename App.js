import * as React from 'react';
import {StatusBar} from 'react-native';
import {
  DarkTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import Navigator from './src/navigation/Navigator';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: '800',
    },
    medium: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: 'bold',
    },
    light: {
      fontFamily: 'Montserrat-Light',
      fontWeight: 'light',
    },
  },
};
const theme = {
  dark: true,
  mode: 'adaptive',
  colors: {
    ...DarkTheme.colors,
    primary: '#ff0000',
    secondary: '#b30000',
    light: '#ffffff',
    black: '#333333',
    otherBlack: '#3e3e40',
    grey: '#888d91',
    accent: 'tomato',
  },
  fonts: configureFonts(fontConfig),

  roundness: 4,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.black}
        barStyle="light-content"
      />
      <Navigator />
    </PaperProvider>
  );
}
