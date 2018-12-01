const settings = (state = {}, action) => {
	switch (action.type) {
		case "UPDATE_SETTINGS":
			let newSettings = { ...action.payload.settings };
			// remove null / undefined keys:
			// Object.keys(newSettings).forEach(key => !newSettings[key] && delete newSettings[key]);
			Object.keys(newSettings).forEach(key => newSettings[key] === undefined && delete newSettings[key]);
			return { ...state, ...newSettings };
		default:
			return state;
	}
};

export default settings;