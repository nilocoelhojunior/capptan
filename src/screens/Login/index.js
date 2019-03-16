// @flow

import * as React from 'react';
import { Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';

import logoCapptan from '../../../assets/images/logoCapptan.png';
import pallete from '../../theme/variables/pallete';
import { DefaultScreen, TextInput } from '../../components';
import { Form, Logo, Wrapper, SubmitButton } from './style';

export default class Login extends React.Component<{}, {}> {
  componentDidMount() {}

  validationSchema = () =>
    yup.object().shape({
      username: yup
        .string()
        .email('Digite um e-mail válido')
        .required('Insira um E-mail'),
      password: yup.string().required('Insira uma Senha'),
    });

  render() {
    return (
      <DefaultScreen header={false} backgroundColor={pallete.white}>
        <Wrapper>
          <Logo source={logoCapptan} />
          <Formik
            validationSchema={this.validationSchema()}
            onSubmit={() => {}}
            render={props => (
              <Form>
                <TextInput
                  name="username"
                  label="E-mail"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput name="password" label="Senha" secureTextEntry autoCapitalize="none" />
                <SubmitButton title="Login" block warning onPress={() => {}}>
                  <Text>Entrar</Text>
                </SubmitButton>
              </Form>
            )}
          />
        </Wrapper>
      </DefaultScreen>
    );
  }
}
