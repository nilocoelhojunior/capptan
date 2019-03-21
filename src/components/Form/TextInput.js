// @flow
import * as React from 'react';
import { Label } from 'native-base';

import pallete from '../../theme/variables/pallete';
import createField from './utils/createField';
import { Error, ErrorWrapper, Item, Input } from './style';

import type { InjectedFieldProps } from './utils/createField';

type Props = {
  name: string,
  label: string,
  onChange?: (value: string) => string,
} & InjectedFieldProps;

class FormTextInput extends React.PureComponent<Props> {
  static defaultProps = {
    onChange: () => '',
  };

  onChangeText = (text: string) => {
    const { name, touched, setFieldTouched, setFieldValue, onChange } = this.props;

    const sanitized = text;

    if (!touched) {
      setFieldTouched(name, true);
    }
    setFieldValue(name, sanitized);

    if (onChange) {
      onChange(text);
    }
  };

  renderLabel() {
    const { label } = this.props;

    if (!label) {
      return null;
    }

    return <Label>{label.toUpperCase()}</Label>;
  }

  renderInput() {
    const { value, ...props } = this.props;

    const inputProps = {
      value,
      onChangeText: this.onChangeText,
      underlineColorAndroid: 'transparent',
    };

    return <Input {...props} {...inputProps} />;
  }

  renderError() {
    const { error } = this.props;
    const itemError = !!error;

    return (
      <ErrorWrapper style={{ opacity: itemError ? 1 : 0 }}>
        <Error>{error ? error.toUpperCase() : ''}</Error>
      </ErrorWrapper>
    );
  }

  render() {
    const { label, error } = this.props;
    const itemError = !!error;

    return (
      <React.Fragment>
        <Item stackedLabel error={itemError}>
          <Label style={{ color: itemError ? pallete.red : pallete.black }}>{label}</Label>
          {this.renderInput()}
        </Item>
        {this.renderError()}
      </React.Fragment>
    );
  }
}

export default createField(FormTextInput);
