import React, { PureComponent } from "react";

import LoginModal from "src/components/Modals/LoginModal.jsx";
import RegisterModal from "src/components/Modals/RegisterModal.jsx";

const ModalConductor = props => {
	switch (props.currentModal) {
		case "LOGIN":
			return <LoginModal {...props} handleClose={props.handleClose}/>;
		case "REGISTER":
			return <RegisterModal {...props} handleClose={props.handleClose}/>;
		default:
			return null;
	}
};

export default ModalConductor;