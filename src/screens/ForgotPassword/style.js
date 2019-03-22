import styled from 'styled-components';

import { Button, Container, Form as NBForm, H2 } from 'native-base';

export const Wrapper = styled(Container)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Content = styled.View`
  width: 90%;
  margin-horizontal: 30px;
  padding: 15px;
  background-color: white;
`;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
  margin-left: 14px;
`;

export const Form = styled(NBForm)`
  margin-vertical: 30px;
  margin-left: -14px;
`;

export const Title = styled(H2)`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Loading = styled.View`
  flex: 1;
  position: absolute;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  height: auto;
`;
