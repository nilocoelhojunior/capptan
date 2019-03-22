// @flow

import React, { Component } from 'react';
import { Header as NBHeader, Button, Icon } from 'native-base';

import { Title, Left, Body, Right } from './style';
import pallete from '../../theme/variables/pallete';

type Props = {
  title: string,
  back: Function,
};

export default class HeaderSimple extends Component<Props> {
  pressIcon = () => {
    const { back } = this.props;
    back();
  };

  render() {
    const { title } = this.props;

    return (
      <NBHeader noShadow transparent>
        <Left>
          <Button transparent onPress={this.pressIcon}>
            <Icon type="FontAwesome5" color={pallete.black} name="chevron-left" fontSize={18} />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </NBHeader>
    );
  }
}
