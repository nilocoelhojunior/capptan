// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

import {
  Author,
  Button,
  Description,
  Icon,
  Title,
  Wrapper,
  WrapperDetails,
  WrapperIcon,
  WrapperItem,
} from './style';

import type { TaskType } from '../../api/types/task.types';

type Props = {
  item: TaskType,
  index: number,
  onPress: Function,
  collapse: boolean,
  onCollpase: Function,
};

class ItemTask extends React.Component<Props, {}> {
  toggleDetails = () => {
    const { onCollpase, index } = this.props;
    onCollpase(index);
  };

  icon = () => {
    const { collapse } = this.props;
    return collapse ? 'chevron-right' : 'chevron-down';
  };

  buttonText = () => {
    const { item } = this.props;
    return item.status ? 'Finalizar' : 'Reabrir';
  };

  handleOnPress = () => {
    const { onPress, item } = this.props;
    onPress(item);
  };

  render = () => {
    const { item, collapse } = this.props;

    return (
      <Wrapper style={{ height: collapse ? 70 : 'auto' }}>
        <WrapperItem>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <WrapperDetails style={{ opacity: collapse ? 0 : 1 }}>
            <Text>{item.content}</Text>
            <Author>Autor</Author>
            <Text>{item.author}</Text>
            <Button primary onPress={this.handleOnPress}>
              <Text>{this.buttonText()}</Text>
            </Button>
          </WrapperDetails>
        </WrapperItem>
        <WrapperIcon>
          <TouchableOpacity onPress={this.toggleDetails}>
            <Icon type="FontAwesome5" color="#f1f1f1" name={this.icon()} />
          </TouchableOpacity>
        </WrapperIcon>
      </Wrapper>
    );
  };
}

export default ItemTask;
