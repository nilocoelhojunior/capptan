import React, { Component } from 'react';

import { Wrapper, Spinner } from './style';

type Props = {};

export default class Loading extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }
}
