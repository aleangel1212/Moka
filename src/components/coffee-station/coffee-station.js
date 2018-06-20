import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { ScreenContainer, LoadingScreen } from '../common';

import CoffeeDetail from './coffee-detail';
import CoffeeTile from './coffee-tile';

import * as actions from '../../actions';

class CoffeeStation extends Component {
	static navigationOptions = {
		title: 'coffee station',
	};

	renderPrefs(prefs) {
		return prefs.map((pref, index) => (
			<CoffeeTile key={index} pref={pref} />
		));
	}

	render() {
		const { me } = this.props;

		if (!me) return <LoadingScreen />;

		return (
			<ScreenContainer style={{ padding: 0 }}>
				<ScrollView>
					<CoffeeDetail pref={me.prefs[0]} />
					<View
						style={{
							flexWrap: 'wrap',
							alignItems: 'flex-start',
							flexDirection: 'row',
						}}
					>
						{this.renderPrefs(me.prefs.slice(1))}
					</View>
				</ScrollView>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	me: state.me,
});

export default connect(mapStateToProps, actions)(CoffeeStation);
