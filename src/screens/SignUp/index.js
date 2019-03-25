// @flow

import * as React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';

import type { NavigationNavigator } from 'react-navigation';
import { DefaultScreen, Loading, TextInput } from '../../components';
import { Form, Wrapper, SubmitButton } from './style';
import { requestSignup } from '../../redux/actions/auth.action';
import { ROUTES } from '../../routes/index';

import type { UserType } from '../../api/types/user.types';
import type { AuthStateType } from '../../redux/reducers/auth.reducer.types';
import type { ReduxStateType } from '../../redux/reducers/reducer.types';
import type { RequestSignupType } from '../../redux/actions/signup.action.types';

type Props = {
  auth: AuthStateType,
  requestSignup: RequestSignupType,
  navigation: NavigationNavigator,
};

class Signup extends React.Component<Props, {}> {
  componentDidUpdate() {
    const { auth } = this.props;
    if (!isEmpty(auth.error)) {
      this.onFailureSignup();
    }
  }

  onFailureSignup = () => {
    const { auth } = this.props;
    Alert.alert('Error', auth.error.message);
  };

  handleSignup = (values: UserType) => {
    const { requestSignup: signup } = this.props;
    signup(values);
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

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(ROUTES.SIGNUP);
  };

  render() {
    const { auth, navigation } = this.props;

    return (
      <DefaultScreen
        headerStyle="simple"
        header={{
          title: 'Cadastrar-se',
          left: { icon: 'chevron-left', onPress: navigation.goBack },
        }}
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
            onSubmit={this.handleSignup}
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
                <SubmitButton title="Cadastrar" block info onPress={props.handleSubmit}>
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
  requestSignup: (data: UserType) => dispatch(requestSignup(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
