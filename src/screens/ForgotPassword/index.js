// @flow

import * as React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Spinner, Text } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';

import type { NavigationNavigator } from 'react-navigation';
import { TextInput } from '../../components';
import { Form, Content, Wrapper, SubmitButton, Title, Loading } from './style';
import {
  requestForgotPassword,
  resetForgotPassword,
} from '../../redux/actions/forgotPassword.action';

import type { ForgotPasswordType } from '../../api/types/forgotPassword.types';
import type { ForgotPasswordStateType } from '../../redux/reducers/forgotPassword.reducer.types';
import type { ReduxStateType } from '../../redux/reducers/reducer.types';
import type {
  RequestForgotPasswordType,
  ResetForgotPasswordType,
} from '../../redux/actions/forgotPassword.action.types';

type Props = {
  forgotPassword: ForgotPasswordStateType,
  resetForgotPassword: ResetForgotPasswordType,
  requestForgotPassword: RequestForgotPasswordType,
  navigation: NavigationNavigator,
};

type State = {
  contentHeight: number,
};

class ForgotPassword extends React.Component<Props, State> {
  state = {
    contentHeight: 0,
  };

  componentDidUpdate() {
    const { forgotPassword } = this.props;
    if (!isEmpty(forgotPassword.error)) {
      this.onFailureForgotPassword();
    }
  }

  componentWillUnmount() {
    const { resetForgotPassword: reset } = this.props;
    reset();
  }

  onFailureForgotPassword = () => {
    const { forgotPassword } = this.props;
    Alert.alert('Error', forgotPassword.error.message);
  };

  handleForgotPassword = (values: ForgotPasswordType) => {
    const { requestForgotPassword: forgot, dispatch } = this.props;
    forgot(values);
  };

  validationSchema = () =>
    yup.object().shape({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('Insira um E-mail'),
    });

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  setContentHeight = event => {
    const { contentHeight } = this.state;
    const { height } = event.nativeEvent.layout;
    if (contentHeight === 0) {
      this.setState({ contentHeight: height });
    }
  };

  renderEmailSend = () => (
    <React.Fragment>
      <Text>Enviamos para o e-mail cadastrado as informações para recuperar a senha</Text>
      <Form>
        <SubmitButton title="Ok" block light onPress={this.goBack}>
          <Text>Ok</Text>
        </SubmitButton>
      </Form>
    </React.Fragment>
  );

  renderForm = () => (
    <React.Fragment>
      <Text>Insira o email cadastrado para recuperar a senha</Text>
      <Formik
        validationSchema={this.validationSchema()}
        onSubmit={this.handleForgotPassword}
        render={props => (
          <Form>
            <TextInput
              name="email"
              label="E-mail"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <SubmitButton
              title="Recuperar senha"
              block
              warning
              onPress={props.handleSubmit}
              disabled={!props.isValid}
            >
              <Text>Confirmar</Text>
            </SubmitButton>
            <SubmitButton title="Cancelar" block light onPress={this.goBack}>
              <Text>Cancelar</Text>
            </SubmitButton>
          </Form>
        )}
      />
    </React.Fragment>
  );

  render() {
    const { forgotPassword } = this.props;

    return (
      <Wrapper style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Content onLayout={event => this.setContentHeight(event)}>
          {forgotPassword.isFetching && (
            <Loading>
              <Spinner />
            </Loading>
          )}
          <Title>Recuperar Senha</Title>
          {!forgotPassword.emailSend && this.renderForm()}
          {forgotPassword.emailSend && this.renderEmailSend()}
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: ReduxStateType) => ({
  forgotPassword: state.forgotPassword,
});

const mapDispatchToProps = (dispatch: Function) => ({
  requestForgotPassword: (data: ForgotPasswordType) => dispatch(requestForgotPassword(data)),
  resetForgotPassword: () => dispatch(resetForgotPassword()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
