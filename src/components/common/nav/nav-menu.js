import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { ScreenContainer } from '../../common';

import NavRows from './nav-rows';

import { setStack, closeNav, setNav } from '../../../actions';

import colors from '../../../colors';

const Menu = props => {
	const { menuContainerStyle, headerStyle } = styles;

	return (
		<View style={menuContainerStyle}>
			<Text style={headerStyle}>menu</Text>
			<NavRows setStack={props.setStack} closeNav={props.closeNav} />
		</View>
	);
};

let NavMenu = props => {
	return (
		<ScreenContainer style={{ padding: 0, backgroundColor: colors.yellow }}>
			<SideMenu
				menu={
					<Menu setStack={props.setStack} closeNav={props.closeNav} />
				}
				isOpen={props.isOpen}
				menuPosition="right"
				bounceBackOnOverdraw={false}
				onChange={props.setNav}
			>
				{props.children}
			</SideMenu>
		</ScreenContainer>
	);
};

const styles = {
	menuContainerStyle: {
		flex: 1,
		backgroundColor: colors.yellow,
		padding: 20,
	},
	headerStyle: {
		color: colors.red,
		fontSize: 20,
	},
};

const mapStateToProps = state => ({ isOpen: state.ui.navMenu.isOpen });

NavMenu = connect(mapStateToProps, { setStack, closeNav, setNav })(NavMenu);

export { NavMenu };
