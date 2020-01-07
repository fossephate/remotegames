import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
	name: "client",
	initialState: {},
	reducers: {
		addTodo(state, action) {
			const { usernameIndex } = action.payload;
			state.push({ id, text, completed: false });
		},
		toggleTodo(state, action) {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});
export const { addTodo, toggleTodo } = todosSlice.actions;
export default clientSlice.reducer;
