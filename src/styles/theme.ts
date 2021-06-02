import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    green: '#03C75A',
    gray: '#707070',
    lightGray: '#ECEDF1',
    superLightGray: '#fbfcfc',
    red: '#E55356',
    whiteGray: '#f0f2f5',
    blue: '#466dfc',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
    violet50: '#F5F3FF',
    violet100: '#EDE9FE',
    violet200: '#DDD6FE',
    violet300: '#C4B5FD',
    violet400: '#A78BFA',
    violet500: '#8B5CF6',
    violet600: '#7C3AED',
    violet700: '#6D28D9',
    violet800: '#5B21B6',
    violet900: '#4C1D95',
  },
  sizes: {
    1: '1px',
    2: '2px',
    3: '4px',
    4: '8px',
    5: '16px',
    6: '24px',
    7: '32px',
    8: '64px',
    container: '640px',
  },
  space: {
    1: '1px',
    2: '2px',
    3: '4px',
    4: '8px',
    5: '16px',
    6: '24px',
    7: '32px',
    8: '64px',
  },
  zIndices: {
    1: '10',
  },
};

export default theme;

export type TColor =
  | 'white'
  | 'black'
  | 'green'
  | 'gray'
  | 'lightGray'
  | 'superLightGray'
  | 'red'
  | 'whiteGray'
  | 'blue'
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'violet50'
  | 'violet100'
  | 'violet200'
  | 'violet300'
  | 'violet400'
  | 'violet500'
  | 'violet600'
  | 'violet700'
  | 'violet800'
  | 'violet900';
