import React, { Component } from 'react';
import { Text } from 'react-native';

class NewCoffee extends Component {
	static navigationOptions = {
		title: 'new coffee',
	};

	render() {
		return <Text>New Coffee</Text>;
	}
}

export default NewCoffee;
