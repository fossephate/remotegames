import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
	name: "client",
	initialState: {},
	reducers: {
		changeUsernameIndex(state, action) {
			state.usernameIndex = action.payload.usernameIndex;
			// state = { ...state, action.payload.usernameIndex };
			return state;
		},
		updateClient(state, action) {
			return (state = { ...state, ...action.payload });
		},
	},
});
export const { changeUsernameIndex, updateClient } = clientSlice.actions;
export default clientSlice.reducer;
