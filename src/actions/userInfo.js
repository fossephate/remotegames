import * as types from "../constants/ActionTypes.js";

export const updateUserInfo = (data) => {
	return {
		type: types.UPDATE_USER_INFO,
		payload: {
			userInfo: data,
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