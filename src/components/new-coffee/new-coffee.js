import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScreenContainer } from '../common';

import NewCoffeeForm from './new-coffee-form';

import * as actions from '../../actions';

class NewCoffee extends Component {
	static navigationOptions = {
		title: 'new coffee',
	};

	onSubmit(values) {
		return this.props
			.addCoffee(this.props.me, values)
			.then(res => this.props.navigation.goBack());
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
	me: state.users.me,
	currentValues: state.form.newCoffee ? state.form.newCoffee.values : {},
});

export default connect(mapStateToProps, actions)(NewCoffee);
