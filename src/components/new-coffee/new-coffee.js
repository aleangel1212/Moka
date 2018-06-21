import React, { Component } from 'react';
import { ScreenContainer } from '../common';

import NewCoffeeForm from './new-coffee-form';

class NewCoffee extends Component {
	static navigationOptions = {
		title: 'new coffee',
	};

	onSubmit(values) {
		console.log(values);
	}

	render() {
		return (
			<ScreenContainer style={{ padding: 0 }}>
				<NewCoffeeForm
					onSubmit={this.onSubmit.bind(this)}
					initialValues={{ flavor: 'regular', cream: 0, sugar: 0 }}
				/>
			</ScreenContainer>
		);
	}
}

export default NewCoffee;
