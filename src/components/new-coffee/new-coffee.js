import React, { Component } from 'react';
import { connect } from 'react-redux';
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
					initialValues={{ type: 'regular', cream: 0, sugar: 0 }}
					currentValues={this.props.currentValues}
				/>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	currentValues: state.form.newCoffee ? state.form.newCoffee.values : {},
});

export default connect(mapStateToProps)(NewCoffee);
