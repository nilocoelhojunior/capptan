import styled from 'styled-components';

import { Button, Container, Content, Icon as NBIcon, Text } from 'native-base';

import pallete from '../../theme/variables/pallete';

export const Wrapper = styled(Container)`
  padding-horizontal: 18px;
`;

export const WrapperContent = styled.View`
  justify-content: center;
  margin-vertical: 40px;
`;

export const WrapperIcon = styled.View`
  margin-top: 40px;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 100;
  background-color: ${pallete.yellow};
`;

export const Icon = styled(NBIcon)`
  color: ${pallete.white};
  font-size: 42px;
`;

export const Label = styled(Text)`
  font-size: 14px;
`;

export const Value = styled(Text)`
  font-size: 24px;
  margin-bottom: 20px;
`;
