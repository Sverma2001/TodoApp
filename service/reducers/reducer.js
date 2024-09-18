import {ADD_TASK, DELETE_TASK, CHANGE_TASK_STATUS} from '../constants';

const initialState = {
  taskList: [],
};

export default function taskData(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return (state = state.filter(task => task.id !== action.payload));
    case CHANGE_TASK_STATUS:
      return (state = state.map(task => {
        if (task.id === action.payload.id) {
          return {...task, isCompleted: action.payload.isCompleted};
        }
        return task;
      }));
    default:
      return state.taskList;
  }
}
