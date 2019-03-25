import styled from 'styled-components';
import { Content, Icon as NBIcon, Text as NBText } from 'native-base';

export const Separator = styled.View`
  height: 2px;
  background-color: #f1f1f1;
  margin-vertical: 15;
`;

export const Title = styled(NBText)`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Icon = styled(NBIcon)`
  font-size: 22px;
  font-weight: normal;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperItem = styled.View`
  width: 90%;
`;

export const WrapperIcon = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;
