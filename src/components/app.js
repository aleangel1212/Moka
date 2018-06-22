import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { LoadingScreen } from './common';

import { AuthRouter, CoffeeRouter } from './router';

import * as actions from '../actions';

class App extends Component {
	componentWillMount() {
		AsyncStorage.getItem('@Moka:x-auth').then(value => {
			if (!value) return this.props.logoutUser();

			const { token } = JSON.parse(value);

			this.props.authUser(token);
			this.props.fetchMe().catch(() => this.props.logoutUser());
		});
	}

	render() {
		if (this.props.loggedIn == null) return <LoadingScreen />;

		if (!this.props.loggedIn) return <AuthRouter />;

		return <CoffeeRouter />;
	}
}

const mapStateToProps = state => ({ loggedIn: state.auth.loggedIn });

export default connect(mapStateToProps, actions)(App);
