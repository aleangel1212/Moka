import React from 'react';
import { Image } from 'react-native';

export const HeaderImage = props => (
	<Image
		source={props.source}
		style={[styles.headerImageStyle, props.style]}
		resizeMode="contain"
	/>
);

const styles = {
	headerImageStyle: {
		height: 100,
		marginBottom: 40,
		width: undefined,
	},
};
