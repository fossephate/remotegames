// react:
import React, { PureComponent } from "react";

import LoginModal from "src/components/Modals/LoginModal.jsx";
import RegisterModal from "src/components/Modals/RegisterModal.jsx";
import ViewAccountModal from "src/components/Modals/ViewAccountModal.jsx";
import InputMapperModal from "src/components/Modals/InputMapperModal.jsx";



const ModalConductor = (props) => {
	switch (props.currentModal) {
		case "ACCOUNT":
			return <ViewAccountModal handleClose={props.handleClose}/>;
		case "LOGIN":
			return <LoginModal handleClose={props.handleClose}/>;
		case "REGISTER":
			return <RegisterModal handleClose={props.handleClose}/>;
		case "INPUT_MAPPER":
			return <InputMapperModal handleClose={props.handleClose}/>;
		default:
			return null;
	}
};

export default ModalConductor;
