// @flow

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'native-base';

import pallete from '../../theme/variables/pallete';
import { Content } from './style';
import { Header, HeaderSimple } from '..';

import type { Props as SimpleHeaderProps } from '../HeaderSimple';

type Props = {
  backgroundColor?: string,
  headerStyle?: 'default' | 'simple' | 'none',
  header: SimpleHeaderProps,
  children: React.ReactNode,
};

export default class DefaultScreen extends Component<Props> {
  static defaultProps = {
    backgroundColor: pallete.white,
    headerStyle: 'default',
  };

  render() {
    const { children, backgroundColor, headerStyle, header } = this.props;
    return (
      <Container style={{ backgroundColor: pallete.white }}>
        {headerStyle === 'default' && <Header {...header} />}
        {headerStyle === 'simple' && <HeaderSimple {...header} />}
        <StatusBar backgroundColor={pallete.yellow} barStyle="dark-content" />
        <Content style={{ backgroundColor }}>{children}</Content>
      </Container>
    );
  }
}
