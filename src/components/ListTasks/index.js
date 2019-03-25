// @flow

import * as React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { Content, Text } from 'native-base';
import { isEmpty } from 'lodash';
import { ItemTask } from '..';
import { Icon, Separator, Title, Wrapper, WrapperIcon, WrapperItem } from './style';

import type { TaskType } from '../../api/types/task.types';

type State = {
  collapse: number,
};

type Props = {
  data: Array<TaskType>,
  updateTask: Function,
};

class ListTasks extends React.Component<Props, State> {
  state = {
    collapse: -1,
  };

  handleCollapse = (index: number) => {
    const { collapse } = this.state;
    let status = index;
    if (collapse === status) {
      status = -1;
    }
    this.setState({ collapse: status });
  };

  keyExtractor = (item: TaskType) => item.id;

  renderItem = ({ item, index }: { item: TaskType, index: number }) => {
    const { collapse } = this.state;
    const { updateTask } = this.props;

    return (
      <ItemTask
        item={item}
        index={index}
        onPress={updateTask}
        collapse={collapse !== index}
        onCollpase={this.handleCollapse}
      />
    );
  };

  renderEmpty = () => <Text>Nenhuma task encontrada</Text>;

  renderSeparator = () => <Separator />;

  itemsChanged = (info: { viewableItems: array, changed: array }) => console.log(info);

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        ListEmptyComponent={this.renderEmpty}
        onViewableItemsChanged={this.itemsChanged}
        style={{ backgroundColor: 'white', flex: 1 }}
      />
    );
  }
}

export default ListTasks;
