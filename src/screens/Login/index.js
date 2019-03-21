// @flow

import * as React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';

import type { NavigationNavigator } from 'react-navigation';
import logoCapptan from '../../../assets/images/logoCapptan.png';
import pallete from '../../theme/variables/pallete';
import { DefaultScreen, Loading, TextInput } from '../../components';
import { Form, Logo, Wrapper, SubmitButton } from './style';
import { requestLogin } from '../../redux/actions/auth.action';
import { ROUTES } from '../../routes/index';

import type { LoginType } from '../../api/types/auth.type';
import type { ReduxStateType } from '../../redux/reducers/reducer.type';
import type { RequestLoginType } from '../../redux/actions/auth.action.type';

type Props = {
  requestLogin: RequestLoginType,
  navigation: NavigationNavigator,
} & ReduxStateType;

class Login extends React.Component<Props, {}> {
  componentDidUpdate() {
    const { auth } = this.props;
    if (!isEmpty(auth.error)) {
      this.onFailureLogin();
    }
  }

  onFailureLogin = () => {
    const { auth } = this.props;
    Alert.alert('Error', auth.error.message);
  };

  handleLogin = (values: LoginType) => {
    this.props.requestLogin(values);
  };

  validationSchema = () =>
    yup.object().shape({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('Insira um E-mail'),
      password: yup.string().required('Insira uma Senha'),
    });

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(ROUTES.SIGNUP);
  };

  render() {
    const { auth } = this.props;

    return (
      <DefaultScreen headerStyle="none" backgroundColor={pallete.white}>
        {auth.isFetching && <Loading />}
        <Wrapper>
          <Logo source={logoCapptan} />
          <Formik
            initialValues={{ password: '123456', email: 'nilocoelhojunior@gmail.com' }}
            validationSchema={this.validationSchema()}
            onSubmit={this.handleLogin}
            render={props => (
              <Form>
                <TextInput
                  name="email"
                  label="E-mail"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput name="password" label="Senha" secureTextEntry autoCapitalize="none" />
                <Button transparent small>
                  <Text>Recuperar senha</Text>
                </Button>
                <SubmitButton title="Login" block warning onPress={props.handleSubmit}>
                  <Text>Entrar</Text>
                </SubmitButton>
                <SubmitButton title="Cadastrar-se" block info onPress={this.goToSignUp}>
                  <Text>Cadastrar-se</Text>
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
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Function) => ({
  requestLogin: (data: LoginType) => dispatch(requestLogin(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
