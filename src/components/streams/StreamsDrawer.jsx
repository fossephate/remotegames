// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// main components:

// material ui:
import { withStyles } from "@material-ui/core/styles";

// components:
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";

// icons:
import InboxIcon from "@material-ui/icons/MoveToInbox";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";

// libs:

// jss:
const drawerWidth = 240;
const styles = (theme) => ({
	root: {
		padding: "1%",
		display: "grid",
		width: "100%",
	},
	[device.tablet]: {
		root: {},
	},
	[device.laptop]: {
		root: {},
	},

	// root: {
	// 	display: "flex",
	// },
	root: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: "#505050",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
});

class StreamsDrawer extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			mobileOpen: false,
		};
	}

	componentDidMount() {}

	handleDrawerToggle = () => {
		this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
	};

	render() {
		console.log("re-rendering streams drawer.");

		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;

		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				{/* <List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List> */}
				<List>
					<ListItem button>
						<ListItemText primary={"Streams"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"Subscriptions"} />
					</ListItem>
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<Drawer
					container={this.props.container}
					variant="persistent"
					// anchor="left"
					open={this.props.drawerOpen}
					onClose={this.handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					{drawer}
				</Drawer>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(StreamsDrawer);
