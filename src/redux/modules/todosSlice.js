import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    // payload: { id, title, body }
    await waitTwoSeconds(); // 2초 지연
    thunkAPI.dispatch(addTodo(payload));
    return payload;
  }
);

export const __deleteTodo = createAsyncThunk(
  'todos/__deleteToDo',
  async (payload, thunkAPI) => {
    // payload: id
    await waitTwoSeconds(); // 2초 지연
    thunkAPI.dispatch(deleteTodo(payload));
    return payload;
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
