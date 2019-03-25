import styled from 'styled-components';
import { Button as NBButton, Content, Icon as NBIcon, Text as NBText } from 'native-base';

export const Author = styled(NBText)`
  font-weight: bold;
  margin-top: 15;
`;

export const Button = styled(NBButton)`
  margin-top: 15;
`;

export const Description = styled(NBText)`
  font-style: italic;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #f5f5f5;
  margin-vertical: 15;
`;

export const Title = styled(NBText)`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Icon = styled(NBIcon)`
  margin-top: 15px;
  font-size: 22px;
  font-weight: normal;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
`;

export const WrapperItem = styled.View`
  width: 90%;
`;

export const WrapperIcon = styled.View`
  width: 10%;
  align-items: center;
  justify-content: flex-start;
`;

export const WrapperDetails = styled.View`
  width: 100%;
  margin-top: 15px;
`;
