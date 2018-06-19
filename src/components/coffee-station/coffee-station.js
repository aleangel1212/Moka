import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

const CoffeeStation = props => {
	console.log(props.token);

	return <Text>Coffee Station</Text>;
};

const mapStateToProps = state => ({
	token: state.auth.token,
});

export default connect(mapStateToProps)(CoffeeStation);
