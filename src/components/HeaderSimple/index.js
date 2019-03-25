// @flow

import React, { Component } from 'react';
import { Header as NBHeader, Button, Icon } from 'native-base';

import { Title, Left, Body, Right, Text } from './style';
import pallete from '../../theme/variables/pallete';

type Props = {
  title: string,
  left: {
    onPress: Function,
    icon: string,
    name: string,
  },
  right: {
    onPress: Function,
    icon: string,
    name: string,
  },
};

export default class HeaderSimple extends Component<Props> {
  pressIconLeft = () => {
    const { left } = this.props;
    left.onPress();
  };

  pressIconRight = () => {
    const { right } = this.props;
    right.onPress();
  };

  render() {
    const { title, left, right } = this.props;

    return (
      <NBHeader noShadow style={{ backgroundColor: pallete.yellow }}>
        <Left>
          {left && (
            <Button transparent onPress={this.pressIconLeft}>
              <Icon type="FontAwesome5" color={pallete.black} name={left.icon} fontSize={18} />
              {left.name && <Text>{left.name}</Text>}
            </Button>
          )}
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          {right && (
            <Button transparent onPress={this.pressIconRight}>
              <Icon type="FontAwesome5" color={pallete.black} name={right.icon} fontSize={18} />
              {right.name && <Text>{right.name}</Text>}
            </Button>
          )}
        </Right>
      </NBHeader>
    );
  }
}
