import * as todoListAction from './types/todo-list';

export const GetListTodo = () => {
  return {
    type: todoListAction.GET_LIST_TODO
  }
};