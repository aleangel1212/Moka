import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScreenContainer } from '../common';

import NewCupForm from './new-cup-form';

import * as actions from '../../actions';

class NewCoffee extends Component {
	static navigationOptions = {
		title: 'new cup',
	};

	onSubmit(values) {
		return this.props
			.addCup(this.props.me, values)
			.then(res => this.props.navigation.goBack());
	}

	render() {
		return (
			<ScreenContainer>
				<NewCupForm
					onSubmit={this.onSubmit.bind(this)}
					initialValues={{ uid: null, size: 6, name: '' }}
					currentValues={this.props.currentValues}
				/>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	me: state.users.me,
	currentValues: state.form.newCup ? state.form.newCup.values : {},
});

export default connect(mapStateToProps, actions)(NewCoffee);
