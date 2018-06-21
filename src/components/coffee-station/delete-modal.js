import React from 'react';
import { View, Text } from 'react-native';
import { Modal, Cup, Button } from '../common';

import colors from '../../colors';

const DeleteModal = props => (
	<Modal
		visible={props.visible}
		animationType="slide"
		transparent={true}
		onRequestClose={props.onFail}
	>
		<View style={styles.modalContainerStyle}>
			<Text style={styles.textStyle}>
				would you like to delete this coffee preset?
			</Text>
			<Cup cream={props.cupValues.cream} type={props.cupValues.type} />
			<View style={styles.optionsContainer}>
				<Button onPress={props.onSuccess}>yes</Button>
				<Button onPress={props.onFail}>no</Button>
			</View>
		</View>
	</Modal>
);

const styles = {
	modalContainerStyle: {
		flex: 1,
		backgroundColor: colors.primary,
		margin: 40,
		padding: 40,
		shadowColor: 'black',
		shadowOpacity: 1,
		shadowOffset: { width: 2, height: 2 },
		elevation: 10,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	textStyle: { color: colors.yellow, fontSize: 24 },
	optionsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
};

export default DeleteModal;
