import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { ScreenContainer, LoadingScreen } from '../common';

import * as actions from '../../actions';

class CoffeeStation extends Component {
	static navigationOptions = {
		title: 'cups',
	};

	render() {
		const { me } = this.props;

		if (!me) return <LoadingScreen />;

		return (
			<ScreenContainer style={{ padding: 0 }}>
				<Text>Hello</Text>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	me: state.users.me,
	loading: state.users.loading,
});

export default connect(mapStateToProps, actions)(CoffeeStation);
