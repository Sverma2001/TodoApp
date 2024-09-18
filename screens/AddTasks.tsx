import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import UUID from 'react-native-uuid';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {addTask} from '../service/actions/actions';

function AddTasks({navigation}: any): React.JSX.Element {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState<string>('');
  const [taskStatus, setTaskStatus] = useState<boolean>(false);

  const handleSubmit = () => {
    if (taskName) {
      const newTask = {
        id: UUID.v4(),
        taskName: taskName,
        isCompleted: taskStatus,
      };

      dispatch(addTask(newTask));
      setTaskName('');
      setTaskStatus(false);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add New Task</Text>

      <TextInput
        placeholder="Enter Task Title"
        value={taskName}
        style={styles.textInput}
        onChangeText={value => setTaskName(value)}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={taskStatus.toString()}
          onValueChange={value => setTaskStatus(value === 'true')}
          style={styles.picker}>
          <Picker.Item label="Completed" value="true" />
          <Picker.Item label="Incomplete" value="false" />
        </Picker>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },

  headerText: {
    color: '#6200EE',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },

  textInput: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6200EE',
    backgroundColor: 'white',
  },

  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },

  picker: {
    width: '100%',
    height: 50,
  },

  submitButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AddTasks;
