import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { LoadingScreen } from './common';

import * as actions from '../actions';

import { AuthStack, AppStack } from './router';

class App extends Component {
	componentWillMount() {
		AsyncStorage.getItem('@Moka:x-auth').then(value => {
			if (!value) return this.props.logoutUser();

			const { token } = JSON.parse(value);

			this.props.authUser(token);
		});
	}

	render() {
		if (this.props.loggedIn == null) return <LoadingScreen />;

		if (!this.props.loggedIn) return <AuthStack />;

		return <AppStack />;
	}
}

const mapStateToProps = state => ({ loggedIn: state.auth.loggedIn });

export default connect(mapStateToProps, actions)(App);
