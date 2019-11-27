import * as types from "./ActionTypes.js";

export const updateClientInfo = (data) => {
	return {
		type: types.UPDATE_CLIENT_INFO,
		payload: {
			clientInfo: data,
		},
	};
};

export const changeUsername = (index) => {
	return {
		type: types.CHANGE_USERNAME,
		payload: {
			usernameIndex: index,
		},
	};
};

export const authenticate = (data) => {
	return {
		type: types.AUTHENTICATE,
		payload: {
			authToken: data,
		},
	};
};

export const login = (data) => {
	return {
		type: types.LOGIN,
		payload: {
			...data,
		},
	};
};

export const register = (data) => {
	return {
		type: types.REGISTER,
		payload: {
			...data,
		},
	};
};

// export const createAccount = (data) => {
// 	return {
// 		type: types.CREATE_ACCOUNT,
// 		payload: {
// 			email: data.email,
// 			password: data.password,
//
// 		},
// 	};
// };
