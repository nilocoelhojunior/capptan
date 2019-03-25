import { Container, Spinner as NBSpinner } from 'native-base';
import styled from 'styled-components';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/helpers';

export const Wrapper = styled(Container)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin-top: ${props => (props.header ? -80 : 0)};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const Spinner = styled(NBSpinner).attrs({
  color: props => props.theme.yellow,
})``;
