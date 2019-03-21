import React, { Component } from 'react';
import { Header as NBHeader, Button, Icon } from 'native-base';

import VectorIcon from '../VectorIcon';
import { Title, Left, Body, Right } from './style';
import pallete from '../../theme/variables/pallete';

export type Props = {
  title: string,
  icon: {
    name: string,
    fontSize: number,
  },
};

export default class HeaderSimple extends Component<Props> {
  render() {
    const { title, icon } = this.props;
    return (
      <NBHeader noShadow transparent>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome5" color={pallete.black} {...icon} />
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
