import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import CompletedTasks from '../screens/CompletedTasks';
import IncompleteTasks from '../screens/IncompleteTasks';
import TaskList from '../screens/TaskList';

const Tab = createMaterialTopTabNavigator();

function Tasks(): React.JSX.Element {
  const taskData = useSelector((state: any) => state);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {
          backgroundColor: 'purple',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen name="Task List" component={TaskList} />
      {taskData.length > 0 && (
        <>
          <Tab.Screen name="Completed" component={CompletedTasks} />
          <Tab.Screen name="Incomplete" component={IncompleteTasks} />
        </>
      )}
    </Tab.Navigator>
  );
}

export default Tasks;
