// @flow

import * as React from 'react';
import { Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import type { NavigationNavigator } from 'react-navigation';
import { DefaultScreen, Loading, ListTasks } from '../../components';
import { Wrapper } from './style';
import { requestTasks, updateTask } from '../../redux/actions/task.action';
import { ROUTES } from '../../routes/index';
import pallete from '../../theme/variables/pallete';

import type { TaskStateType } from '../../redux/reducers/task.reducer.types';
import type { AppStateType } from '../../redux/reducers/app.reducer.types';
import type { ReduxStateType } from '../../redux/reducers/reducer.types';
import type { RequestTasksType, UpdateTaskType } from '../../redux/actions/task.action.types';
import type { TaskType } from '../../api/types/task.types';

type Props = {
  task: TaskStateType,
  app: AppStateType,
  requestTasks: RequestTasksType,
  updateTask: UpdateTaskType,
  navigation: NavigationNavigator,
};

class Signup extends React.Component<Props, {}> {
  componentDidMount() {
    this.fetchTasks();
  }

  componentDidUpdate(prevProps: Props) {
    const { app } = this.props;
    const routes = [ROUTES.TASKS_OPENED, ROUTES.TASKS_CLOSED];
    if (routes.includes(app.route) && prevProps.app.route !== app.route) {
      this.fetchTasks();
    }
  }

  status = () => {
    const { app } = this.props;
    return ROUTES.TASKS_OPENED === app.route;
  };

  fetchTasks = () => {
    const { requestTasks: tasks } = this.props;
    tasks(this.status());
  };

  updateTask = (item: TaskType) => {
    const { updateTask: update } = this.props;
    const task = item;
    task.status = !task.status;

    update(task);
  };

  pageTitle = () => (this.status() ? 'Pautas abertas' : 'Pautas fechadas');

  onFailureSignup = () => {
    const { task } = this.props;
    Alert.alert('Error', task.error.message);
  };

  goToCreateTask = () => {
    const { navigation } = this.props;

    navigation.navigate(ROUTES.CREATE_TASK, { status: this.status() });
  };

  render() {
    const { task } = this.props;

    return (
      <DefaultScreen
        headerStyle="simple"
        backgroundColor={pallete.white}
        header={{
          title: this.pageTitle(),
          right: { name: 'Incluir Pauta', onPress: this.goToCreateTask },
        }}
      >
        {task.isFetching && <Loading />}
        <Wrapper>
          {!task.isFetching && (
            <ScrollView>
              <ListTasks data={task.tasks} updateTask={this.updateTask} />
            </ScrollView>
          )}
        </Wrapper>
      </DefaultScreen>
    );
  }
}

const mapStateToProps = (state: ReduxStateType) => ({
  app: state.app,
  task: state.task,
});

const mapDispatchToProps = (dispatch: Function) => ({
  requestTasks: (status: boolean) => dispatch(requestTasks(status)),
  updateTask: (task: TaskType) => dispatch(updateTask(task)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
