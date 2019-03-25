import {
  Body as NBBody,
  Title as NBTitle,
  Left as NBLeft,
  Right as NBRight,
  Text as NBText,
} from 'native-base';

import styled from 'styled-components';

export const Title = styled(NBTitle)`
  align-self: center;
  font-weight: normal;
  font-size: 20px;
  color: white;
`;

export const Left = styled(NBLeft)`
  flex: 1;
`;

export const Right = styled(NBRight)`
  flex: 1;
`;

export const Body = styled(NBBody)`
  flex: 2;
`;

export const Text = styled(NBText)`
  text-align: center;
`;
