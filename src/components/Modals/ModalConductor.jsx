import React, { PureComponent } from "react";

import LogInModal from "src/components/Modals/LogInModal.jsx";
import RegisterModal from "src/components/Modals/RegisterModal.jsx";

const ModalConductor = props => {
	switch (props.currentModal) {
		case "LOGIN":
			return <LogInModal {...props} handleClose={props.handleClose}/>;
		case "REGISTER":
			return <RegisterModal {...props} handleClose={props.handleClose}/>;
		default:
			return null;
	}
};

export default ModalConductor;