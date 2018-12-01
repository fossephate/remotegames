// react:
import React, { PureComponent } from "react";

import LoginModal from "src/components/Modals/LoginModal.jsx";
import RegisterModal from "src/components/Modals/RegisterModal.jsx";
import ViewAccountModal from "src/components/Modals/ViewAccountModal.jsx";
import InputMapperModal from "src/components/Modals/InputMapperModal.jsx";



const ModalConductor = (props) => {
	switch (props.currentModal) {
		case "ACCOUNT":
			return <ViewAccountModal {...props} handleClose={props.handleClose}/>;
		case "LOGIN":
			return <LoginModal {...props} handleClose={props.handleClose}/>;
		case "REGISTER":
			return <RegisterModal {...props} handleClose={props.handleClose}/>;
		case "INPUT_MAPPER":
			return <InputMapperModal {...props} handleClose={props.handleClose}/>;
		default:
			return null;
	}
};

export default ModalConductor;
