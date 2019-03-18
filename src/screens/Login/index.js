// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';

import logoCapptan from '../../../assets/images/logoCapptan.png';
import pallete from '../../theme/variables/pallete';
import { DefaultScreen, TextInput } from '../../components';
import { Form, Logo, Wrapper, SubmitButton } from './style';
import { requestLogin } from '../../redux/actions/auth.action';

import type { LoginType } from '../../api/types/auth.type';

class Login extends React.Component<{}, {}> {
  componentDidMount() {}

  handleLogin = (values: LoginType) => {
    this.props.requestLogin(values);
  };

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
            onSubmit={this.handleLogin}
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
                <SubmitButton title="Login" block warning onPress={props.handleSubmit}>
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

const mapStateToProps = (state: ReduxStateType) => ({
  user: state.user,
  subscription: state.subscription,
  whitelabel: state.whitelabel,
});

const mapDispatchToProps = (dispatch: Function) => ({
  resetForgotPassword: () => dispatch(fetchResetForgotPassword()),
  loginRequest: (data: { username: string, password: string }) => dispatch(loginRequest(data)),
  logout: () => dispatch(fetchLogout()),
  getSubscription: (userUuid: string) => dispatch(requestGetSubscription(userUuid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
