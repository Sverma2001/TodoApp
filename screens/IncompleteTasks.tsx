import React from 'react';
import {markComplete} from '../service/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function IncompleteTasks(): React.JSX.Element {
  const dispatch = useDispatch();
  let taskData = useSelector((state: any) => state);
  const inCompleteTasks = taskData.filter((task: any) => !task.isCompleted);

  return inCompleteTasks.length ? (
    <FlatList
      data={inCompleteTasks}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskTitle}>{item.taskName}</Text>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() =>
              dispatch(
                markComplete({id: item.id, isCompleted: !item.isCompleted}),
              )
            }>
            <Text style={styles.buttonText}>Mark as Completed</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  ) : (
    <View style={styles.noTaskContainer}>
      <Text style={styles.noTaskText}>No Incomplete Tasks Available</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f0f8ff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  completeButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noTaskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTaskText: {
    fontSize: 18,
    color: '#888',
  },
});

export default IncompleteTasks;
