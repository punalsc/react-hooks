import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
	state = {
		username: 'User',

		handleSubmit: event => {
			this.setState({ username: event.target.value });
			event.preventDefault();
			// console.log(this.refs.input.value);
		}
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
