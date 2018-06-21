import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RadioButton from 'react-native-radio-button';

class RadioGroup extends Component {
	state = {
		value:
			this.props.data[0].value ||
			this.props.data[0] ||
			this.props.initialValue,
	};

	onChange(newValue) {
		this.setState({ value: newValue });
		this.props.onChange(newValue);
	}

	renderButtons(data) {
		const { labelSize, labelColor, buttonColor } = this.props;
		const { radioContainerStyle, textStyle } = styles;

		return data.map((option, index) => (
			<View style={radioContainerStyle} key={index}>
				<RadioButton
					animation={null}
					isSelected={
						option.value === this.state.value ||
						option === this.state.value
					}
					onPress={() => this.onChange(option.value || option)}
					innerColor={buttonColor}
					outerColor={buttonColor}
				/>
				<Text
					style={[
						textStyle,
						{ fontSize: labelSize, color: labelColor },
					]}
				>
					{option.label || option}
				</Text>
			</View>
		));
	}

	render() {
		return (
			<View style={styles.radioGroupStyle}>
				{this.renderButtons(this.props.data)}
			</View>
		);
	}
}

const styles = {
	radioGroupStyle: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	radioContainerStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	textStyle: {
		paddingLeft: 10,
	},
};

export default RadioGroup;
