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
import { createTask } from '../../redux/actions/task.action';
import { ROUTES } from '../../routes/index';

import type { TaskType } from '../../api/types/task.types';
import type { AuthStateType } from '../../redux/reducers/auth.reducer.types';
import type { TaskStateType } from '../../redux/reducers/task.reducer.types';
import type { ReduxStateType } from '../../redux/reducers/reducer.types';
import type { CreateTaskType } from '../../redux/actions/task.action.types';

type Props = {
  auth: AuthStateType,
  task: TaskStateType,
  createTask: CreateTaskType,
  navigation: NavigationNavigator,
};

class CreateTask extends React.Component<Props, {}> {
  componentDidUpdate(prevPros: Props) {
    const { task } = this.props;
    if (!isEmpty(task.error)) {
      this.onFailureSignup();
    }

    if (prevPros.task.isFetching === true && task.isFetching === false && isEmpty(task.error)) {
      this.goToBack();
    }
  }

  status = () => {
    const { navigation } = this.props;
    return navigation.state.params.status;
  };

  goToBack = () => {
    const { navigation } = this.props;
    const route = this.status() ? ROUTES.TASKS_OPENED : ROUTES.TASKS_CLOSED;
    navigation.navigate(route, { status: this.status() });
  };

  onFailureSignup = () => {
    const { task } = this.props;
    Alert.alert('Error', task.error.message);
  };

  handleSignup = (values: TaskType) => {
    const { createTask: create } = this.props;
    create(values);
  };

  validationSchema = () =>
    yup.object().shape({
      title: yup.string().required('Insira um título'),
      description: yup.string().required('Insira uma Descrição'),
      content: yup.string().required('Insira Detalhes'),
    });

  render() {
    const { task, auth } = this.props;

    return (
      <DefaultScreen
        headerStyle="simple"
        header={{
          title: 'Cadastrar Pauta',
          left: { icon: 'chevron-left', onPress: () => this.goToBack() },
        }}
      >
        {task.isFetching && <Loading />}
        <Wrapper>
          <Formik
            initialValues={{
              author: auth.user.name,
              status: this.status(),
            }}
            validationSchema={this.validationSchema()}
            onSubmit={this.handleSignup}
            render={props => (
              <Form>
                <TextInput name="title" label="Título" />
                <TextInput name="description" label="Descrição" />
                <TextInput name="content" label="Conteúdo" textarea />
                <TextInput name="author" label="Autor" disabled />
                <SubmitButton
                  title="Cadastrar"
                  block
                  info
                  onPress={props.handleSubmit}
                  disabled={!props.isValid}
                >
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
  task: state.task,
});

const mapDispatchToProps = (dispatch: Function) => ({
  createTask: (data: TaskType) => dispatch(createTask(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTask);
