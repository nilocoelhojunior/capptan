// @flow

import * as React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';

import logoCapptan from '../../../assets/images/logoCapptan.png';
import pallete from '../../theme/variables/pallete';
import { DefaultScreen, Loading, TextInput } from '../../components';
import { Form, Logo, Wrapper, SubmitButton } from './style';
import { requestLogin } from '../../redux/actions/auth.action';

import type { LoginType } from '../../api/types/auth.type';
import type { ReduxStateType } from '../../redux/reducers/reducer.type';
import type { RequestLoginType } from '../../redux/actions/auth.action.type';

type Props = {
  requestLogin: RequestLoginType,
} & ReduxStateType;

class SignUp extends React.Component<Props, {}> {
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
      name: yup.string().required('Insira uma nome'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('Insira um E-mail'),
      password: yup.string().required('Insira uma Senha'),
    });

  render() {
    const { auth } = this.props;

    return (
      <DefaultScreen
        headerStyle="simple"
        header={{ title: 'Cadastrar-se', icon: { name: 'chevron-left' } }}
      >
        {auth.isFetching && <Loading />}
        <Wrapper>
          <Formik
            initialValues={{
              name: 'Nilo',
              password: '123456',
              email: 'nilocoelhojunior@gmail.com',
            }}
            validationSchema={this.validationSchema()}
            onSubmit={this.handleLogin}
            render={props => (
              <Form>
                <TextInput name="name" label="Nome" />
                <TextInput
                  name="email"
                  label="E-mail"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput name="password" label="Senha" secureTextEntry autoCapitalize="none" />
                <SubmitButton title="Login" block warning onPress={props.handleSubmit}>
                  <Text>Cadastrar</Text>
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
)(SignUp);
