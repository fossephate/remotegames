// react:
import React from "react";

import { Paper, Button, Popover } from "@material-ui/core";

const PopoverMenu = (props) => (
	<Popover
		open={props.open}
		anchorEl={props.anchorEl}
		onClose={props.onClose}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
	>
		<Paper elevation={4} style={{ padding: "10px" }}>
			{/* <Button variant="contained" color="primary">View Profile</Button> */}
			<Button variant="contained" color="primary">
				View Profile
			</Button>
			<Button variant="contained" color="secondary">
				Ban
			</Button>
			<Button variant="contained" color="primary">
				Kick from Queue
			</Button>
		</Paper>
	</Popover>
);

export default PopoverMenu;
