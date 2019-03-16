import styled from 'styled-components';
import { Container, Input as NBInput, Item as NBItem } from 'native-base';

import pallete from '../../theme/variables/pallete';

export const Item = styled(NBItem)`
  margin-bottom: 20px;
`;

export const Input = styled(NBInput)``;

export const ErrorWrapper = styled(Container)`
  justify-content: flex-end;
  margin-left: 14;
`;

export const Error = styled.Text`
  font-size: 11px;
  letter-spacing: -0.26px;
  color: ${pallete.red};
`;
