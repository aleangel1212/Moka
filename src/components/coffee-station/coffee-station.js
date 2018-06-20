import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScreenContainer } from '../common';

import CoffeeDetail from './coffee-detail';

import * as actions from '../../actions';

class CoffeeStation extends Component {
	static navigationOptions = {
		title: 'coffee station',
	};

	render() {
		return (
			<ScreenContainer style={{ padding: 0 }}>
				<CoffeeDetail />
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(CoffeeStation);
