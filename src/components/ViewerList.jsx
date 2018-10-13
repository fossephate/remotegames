import React, { PureComponent } from "react";

export default class ViewerList extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	//     componentDidMount() {
	//  		setInterval(() => {
	//  			this.setState({});
	//  		}, 1000);
	//  		console.log("mounted");
	//     }

	// shouldComponentUpdate(nextProps, nextState) {
	//   viewer list changed:
	// 	if (JSON.stringify(this.props.viewerIDs) != JSON.stringify(nextProps.viewerIDs)) {
	// 		console.log("updated");
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	// 	componentDidUpdate(prevProps, prevState) {
	// 		console.log("changed");
	// 	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log("get");
	// 	return {};
	// }

	// 	componentDidUpdate(prevProps) {
	// 	  compare props:
	// 		if (this.props.viewerIDs !== prevProps.viewerIDs) {
	// 			console.log("props changed.");
	// 		}
	// 	}

	// 	componentWillRecieveProps(nextProps) {
	// 	  compare props:
	// 		if (this.props.viewerIDs !== nextProps.viewerIDs) {
	// 			console.log("props changed.");
	// 			this.setState({});
	// 		}
	// 	}

	getViewerList() {

		let viewerNames = [];

		for (let i = 0; i < this.props.viewerIDs.length; i++) {
			viewerNames.push([]);
			for (let j = 0; j < this.props.viewerIDs[i].length; j++) {
				let name = this.props.usernameMap[this.props.viewerIDs[i][j]];
				viewerNames[i].push(name);
			}
		}

		let viewers = [];

		for (let i = 0; i < viewerNames.length; i++) {
			if (viewerNames[i].length > 0) {
				viewers.push(<div key={i} className="dropdown-divider">Lagless {i + 1}</div>);
				// 				lists.push(this.state.viewerNames.map(name => <li key={name}>{name}</li>));
			}
			for (let j = 0; j < viewerNames[i].length; j++) {
				let html = <button key={i + ":" + j} className="viewerElement dropdown-item" data-toggle="popover" tabIndex="0" uniqueid={this.props.viewerIDs[i][j]}>{viewerNames[i][j]}</button>;
				viewers.push(html);
			}
		}
		return viewers;
	}

	render() {

		return (
			<React.Fragment>
				<a className="btn btn-secondary dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown">
					Viewers
				</a>
				<div id="laglessViewerDropdownDiv" className="dropdown-menu">
					{this.getViewerList()}
				</div>
			</React.Fragment>
		);
	}

}