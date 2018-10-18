import React, { PureComponent } from "react";

import "./MessageList.css";

export default class MessageList extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
		}
	}

	// getWaitlist() {
	//
	// 	let waitlist = [];
	//
	// 	if (this.props.uniqueIDs[this.props.tab - 1].length == 0) {
	// 		return <li key={0} className="list-group-item">The waitlist is empty right now</li>;
	// 	}
	//
	//
	// 	for (let i = 0; i < this.props.uniqueIDs[this.props.tab - 1].length; i++) {
	// 		let listHTML;
	//
	// 		let ID = this.props.uniqueIDs[this.props.tab - 1][i];
	//
	// 		if (this.props.myID == ID) {
	// 			listHTML = <li key={i} className="list-group-item-highlight">{this.props.usernameMap[ID]}</li>;
	// 		} else {
	// 			listHTML = <li key={i} className="list-group-item">{this.props.usernameMap[ID]}</li>;
	// 		}
	//
	// 		waitlist.push(listHTML);
	// 	}
	//
	// 	return waitlist;
	// }

	render() {

		return (
			<React.Fragment>
				<div id="messageList">
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore ipsum quae fuga amet. Ipsum dolorum recusandae, vero quasi nihil eligendi temporibus omnis ducimus aliquid quis, iusto laudantium dolores, cupiditate hic fuga sint. Quae facere voluptates amet quos at repellat maiores sequi hic quia praesentium ipsa dolores expedita maxime quod alias nostrum nam, unde in aperiam. Sint iure, vel ducimus quae cumque incidunt, quia natus neque odit, quo possimus ipsa minima voluptates reprehenderit veniam earum sequi ipsam facilis. Atque, officia.</div>
				</div>
			</React.Fragment>
		);
	}

}