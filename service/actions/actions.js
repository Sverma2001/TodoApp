import {ADD_TASK, DELETE_TASK, CHANGE_TASK_STATUS} from '../constants';
export const addTask = payload => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const deleteTask = payload => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export const markComplete = payload => {
  return {
    type: CHANGE_TASK_STATUS,
    payload,
  };
};
