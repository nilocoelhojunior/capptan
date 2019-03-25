// @flow

import * as React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';
import SplashScreen from 'react-native-splash-screen';

import type { NavigationNavigator } from 'react-navigation';
import logoCapptan from '../../../assets/images/logoCapptan.png';
import pallete from '../../theme/variables/pallete';
import { DefaultScreen, Loading, TextInput } from '../../components';
import { Form, Logo, Wrapper, SubmitButton } from './style';
import { requestLogin, requestUserLogged } from '../../redux/actions/auth.action';
import { ROUTES } from '../../routes/index';
import NavigationService from '../../routes/navigationService';

import type { LoginType } from '../../api/types/login.types';
import type { AuthStateType } from '../../redux/reducers/auth.reducer.types';
import type { ReduxStateType } from '../../redux/reducers/reducer.types';
import type {
  RequestLoginType,
  RequestUserLoggedType,
} from '../../redux/actions/auth.action.types';

type Props = {
  auth: AuthStateType,
  requestLogin: RequestLoginType,
  requestUserLogged: RequestUserLoggedType,
  navigation: NavigationNavigator,
};

class Login extends React.Component<Props, {}> {
  componentDidMount() {
    const { requestUserLogged: userLogged } = this.props;
    userLogged();
    // SplashScreen.hide();
  }

  componentDidUpdate() {
    const { auth } = this.props;
    if (!isEmpty(auth.error)) {
      this.onFailureLogin();
    }
    if (!isEmpty(auth.user)) {
      this.goToTabs();
    }
  }

  onFailureLogin = () => {
    const { auth } = this.props;
    Alert.alert('Error', auth.error.message);
  };

  handleLogin = (values: LoginType) => {
    const { requestLogin: login } = this.props;
    login(values);
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

  goToForgotPassword = () => {
    const { navigation } = this.props;
    navigation.push(ROUTES.FORGOT_PASSWORD);
  };

  goToTabs = () => {
    NavigationService.reset(ROUTES.TABS);
  };

  render() {
    const { auth } = this.props;

    return (
      <DefaultScreen headerStyle="none" backgroundColor={pallete.white}>
        {auth.isFetching && <Loading header={false} />}
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
                <Button transparent small onPress={this.goToForgotPassword}>
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
  requestUserLogged: () => dispatch(requestUserLogged()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
