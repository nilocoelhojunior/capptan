// @flow
import idx from 'idx';

import { API_KEY } from 'react-native-dotenv';

type InputType = {
  [key: string]: any,
};

const generateQueryString = (input: InputType): string => Object.keys(input).reduce((accumulator: string, key: string) => {
    const concatenator = accumulator.length === 0 ? '?' : '&';
    const value = idx(input, _ => _[key]);

    if (!value) {
      return accumulator;
    }

    return `${accumulator}${concatenator}${key}=${value}`;
  }, `key=${API_KEY}`);

export default generateQueryString;
