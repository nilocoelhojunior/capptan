import styled from 'styled-components';

import { Button, Container, Form as NBForm } from 'native-base';

export const Wrapper = styled(Container)`
  padding: 15px 10px;
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
