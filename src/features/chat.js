import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
	name: "chat",
	initialState: {},
	reducers: {
		addTodo(state, action) {
			const { id, text } = action.payload;
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
export default todosSlice.reducer;
