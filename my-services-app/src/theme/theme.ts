import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';

export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2563eb',
    secondary: '#10b981',
    background: '#f8fafc',
  },
  roundness: 10,
};