import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./Message.css";

const Message = ({ message, username, userid }) => (
	<div className="message">
		<b>{username}</b> {message}
	</div>
);

Message.propTypes = {
	message: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	userid: PropTypes.string.isRequired,
};

export default Message;