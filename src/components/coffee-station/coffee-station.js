import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import * as actions from '../../actions';

class CoffeeStation extends Component {
	render() {
		return <Text>Coffee Station</Text>;
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(CoffeeStation);
