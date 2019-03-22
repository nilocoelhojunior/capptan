import styled from 'styled-components';

import { Button, Container, Form as NBForm } from 'native-base';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/helpers';

export const Wrapper = styled(Container)`
  padding-horizontal: 18px;
`;

export const Logo = styled.Image.attrs({ resizeMode: 'contain' })`
  width: ${WINDOW_WIDTH * 0.8};
  height: ${WINDOW_HEIGHT * 0.3};
  align-self: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
  margin-left: 14px;
`;

export const Form = styled(NBForm)`
  margin-vertical: 30px;
  margin-left: -14px;
`;
