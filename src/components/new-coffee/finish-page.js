import React from 'react';
import { ScreenContainer, Cup, Button } from '../common';

const SugarPage = props => {
	const { screenContainerStyle } = styles;
	const { type, cream } = props.currentValues;

	return (
		<ScreenContainer style={screenContainerStyle}>
			<Cup type={type} cream={cream} />
			<Button onPress={props.onSubmit} loading={props.loading}>
				finish
			</Button>
		</ScreenContainer>
	);
};

const styles = {
	screenContainerStyle: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
};

export default SugarPage;
