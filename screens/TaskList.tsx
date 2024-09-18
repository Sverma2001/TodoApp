/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTask, markComplete} from '../service/actions/actions';

function TaskList(): React.JSX.Element {
  const dispatch = useDispatch();
  let taskData = useSelector((state: any) => state);

  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  const confirmDeleteTask = () => {
    if (taskToDelete !== null) {
      dispatch(deleteTask(taskToDelete));
      setModalVisible(false);
      setTaskToDelete(null);
    }
  };

  const handleDeletePress = (taskId: number) => {
    setTaskToDelete(taskId);
    setModalVisible(true);
  };

  return taskData.length > 0 ? (
    <FlatList
      data={taskData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item.taskName}</Text>
          <Text
            style={[
              styles.statusText,
              {color: item.isCompleted ? 'green' : 'red'},
            ]}>
            {item.isCompleted ? 'Completed' : 'Incomplete'}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: item.isCompleted ? '#ffc107' : '#28a745'},
              ]}
              onPress={() =>
                dispatch(
                  markComplete({id: item.id, isCompleted: !item.isCompleted}),
                )
              }>
              <Text style={styles.buttonText}>
                {item.isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#dc3545'}]}
              onPress={() => handleDeletePress(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Are you sure you want to delete this task? This action cannot
                  be undone.
                </Text>

                <View style={styles.modalButtonContainer}>
                  <Pressable
                    style={[styles.modalButton, styles.confirmButton]}
                    onPress={confirmDeleteTask}>
                    <Text style={styles.modalButtonText}>Confirm</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalButtonText}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    />
  ) : (
    <Text style={styles.noTaskText}>No tasks Available</Text>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fefefe',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 18,
    fontFamily: 'serif',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  noTaskText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: 'red',
  },
  cancelButton: {
    backgroundColor: 'grey',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TaskList;
