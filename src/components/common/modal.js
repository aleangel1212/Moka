import React from 'react';
import { Modal as NativeModal, View } from 'react-native';

const Modal = props => {
	const { animationType, transparent, visible, onRequestClose } = props;

	return (
		<NativeModal
			animationType={animationType}
			transparent={transparent}
			visible={visible}
			onRequestClose={onRequestClose}
			style={{ margin: 0 }}
		>
			{props.children}
		</NativeModal>
	);
};

export { Modal };
