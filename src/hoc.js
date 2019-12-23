import React, { Component } from 'react';

class Hoc extends Component {
	state = {
		isOpen: false
	};

	toggleFunc = () =>
		this.setState(prevState => {
			return { isOpen: !prevState.isOpen };
		});

	render() {
		const Component = this.props.component;
		return (
			<Component
				toggleFunc={this.toggleFunc}
				isOpen={this.state.isOpen}
				{...this.props}
			/>
		);
	}
}

const ToggleWrapper = component => props => (
	<Hoc {...props} component={component} />
);

export default ToggleWrapper;
