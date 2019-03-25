// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { isEmpty } from 'lodash';

import type { NavigationNavigator } from 'react-navigation';
import { DefaultScreen, Loading } from '../../components';
import { Icon, Label, Value, Wrapper, WrapperContent, WrapperIcon } from './style';
import { requestLogout } from '../../redux/actions/auth.action';
import { ROUTES } from '../../routes/index';

import type { AuthStateType } from '../../redux/reducers/auth.reducer.types';
import type { ReduxStateType } from '../../redux/reducers/reducer.types';
import type { RequestLogoutType } from '../../redux/actions/auth.action.types';

type Props = {
  auth: AuthStateType,
  requestLogout: RequestLogoutType,
};

class Profile extends React.Component<Props, {}> {
  handleLogout = () => {
    const { requestLogout: logout } = this.props;
    logout();
  };

  render() {
    const { auth } = this.props;
    const { user } = auth;
    return (
      <DefaultScreen headerStyle="simple" header={{ title: 'Perfil' }}>
        {(auth.isFetching || isEmpty(user)) && <Loading />}
        <Wrapper>
          {!isEmpty(user) && (
            <React.Fragment>
              <WrapperIcon>
                <Icon type="FontAwesome5" name="user" />
              </WrapperIcon>
              <WrapperContent>
                <Label>Nome</Label>
                <Value>{user.name}</Value>
                <Label>E-mail</Label>
                <Value>{user.email}</Value>
              </WrapperContent>
              <Button block onPress={this.handleLogout}>
                <Text>Sair</Text>
              </Button>
            </React.Fragment>
          )}
        </Wrapper>
      </DefaultScreen>
    );
  }
}

const mapStateToProps = (state: ReduxStateType) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Function) => ({
  requestLogout: () => dispatch(requestLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
