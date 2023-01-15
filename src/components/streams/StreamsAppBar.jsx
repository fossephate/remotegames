// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// main components:
import MyAppBar from "shared/components/general/MyAppBar.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// components:
import { Button, MenuItem, IconButton, Typography, InputBase } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

// icons:
import {
	Menu as MenuIcon,
	Search as SearchIcon,
	AccountCircle,
} from "@material-ui/icons";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {},
	grow: {
		flexGrow: 1,
	},

	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
		cursor: "pointer",
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		width: theme.spacing(9),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
		width: "100%",
	},
	inputInput: {
		paddingTop: theme.spacing(1),
		paddingRight: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		paddingLeft: theme.spacing(10),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: 200,
		},
	},
});

class StreamsAppBar extends PureComponent {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	handleLoginRegister = () => {
		this.props.history.push("/login");
	};

	handleAccount = () => {
		this.props.history.push("/account");
	};

	handleDownloadHostFiles = () => {
		window.open("https://remotegames.io/8099/download/", "_blank");
	};

	handleProjectDiscord = () => {
		window.open("https://discord.io/rgio/", "_blank");
	};

	handleDevDiscord = () => {
		window.open("https://discord.io/fosse/", "_blank");
	};

	render() {
		console.log("re-rendering streamsappbar.");

		const { classes } = this.props;

		if (this.props.hide) {
			return null;
		}

		const mobileMenu = (
			<div>
				<MenuItem onClick={this.handleAccount}>
					<IconButton color="inherit">
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
				{/* <MenuItem onClick={this.handleDownloadHostFiles}>
					<p>Download Host Files</p>
				</MenuItem> */}
				<MenuItem onClick={this.handleProjectDiscord}>
					<p>Project Discord Server</p>
				</MenuItem>
				{/* <MenuItem onClick={this.handleDevDiscord}>
					<p>Dev's Discord Server</p>
				</MenuItem> */}
			</div>
		);

		let main = (
			<>
				{/* <IconButton
					className={classes.menuButton}
					color="inherit"
					aria-label="Open drawer"
					onClick={this.props.handleToggleDrawer}
				>
					<MenuIcon />
				</IconButton> */}
				<Typography
					className={classes.title}
					variant="h6"
					color="inherit"
					noWrap
					onClick={() => {
						this.props.history.push("/");
					}}
				>
					Streams
				</Typography>
				{/* <div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
					/>
				</div> */}
			</>
		);

		let desktop = (
			<>
				<div className={classes.grow} />
				{/* <Button
					size="small"
					color="default"
					variant="contained"
					onClick={this.handleDownloadHostFiles}
				>
					Download Host Files
				</Button> */}
				<div style={{ width: "10px" }} />
				<Button
					size="small"
					color="default"
					variant="contained"
					onClick={this.handleProjectDiscord}
				>
					Project Discord
				</Button>
				<div style={{ width: "10px" }} />
				{/* <Button
					size="small"
					color="default"
					variant="contained"
					onClick={this.handleDevDiscord}
				>
					Dev's Discord
				</Button> */}
				<IconButton onClick={this.handleAccount} color="inherit">
					<AccountCircle />
				</IconButton>
			</>
		);

		let mobile = <div></div>;

		if (!this.props.loggedIn) {
			mobile = desktop = (
				<>
					<div style={{ width: "10px" }} />
					<Button
						size="small"
						color="default"
						variant="contained"
						onClick={this.handleLoginRegister}
					>
						Login / Register
					</Button>
				</>
			);
		}

		return (
			<MyAppBar
				main={main}
				desktop={desktop}
				mobile={mobile}
				mobileMenu={mobileMenu}
			></MyAppBar>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.client.loggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(StreamsAppBar);
