import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';

import { openNav } from '../../actions';

import burgerSource from '../../img/burger.png';

let NavBurger = props => (
	<TouchableOpacity onPress={props.openNav} style={styles.containerStyle}>
		<Image
			source={burgerSource}
			style={styles.imageStyle}
			resizeMode="contain"
		/>
	</TouchableOpacity>
);

const styles = {
	containerStyle: {
		paddingRight: 20,
	},
	imageStyle: {
		height: 30,
		width: 30,
	},
};

NavBurger = connect(null, { openNav })(NavBurger);

export { NavBurger };
