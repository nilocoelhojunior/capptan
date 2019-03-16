import { API_URL } from 'react-native-dotenv';

import api from './api';
import generateQueryString from './utils/generateQueryString';
import type { VolumesType } from './types/volumes.type';

/** ****************
 * VOLUMES *
 ***************** */

const volumes = async (query: string): Promise<VolumesType> => {
  const queryString = generateQueryString({ q: query });
  const url = `${API_URL}${queryString}`;

  return api({
    method: 'GET',
    url,
  });
};

export default volumes;
