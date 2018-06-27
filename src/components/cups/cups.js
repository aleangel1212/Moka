import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
	ScreenContainer,
	LoadingScreen,
	TileContainer,
	AddTile,
} from '../common';

import CupTile from './cup-tile';
import DeleteCupModal from './delete-cup-modal';

import * as actions from '../../actions';

class CoffeeStation extends Component {
	static navigationOptions = {
		title: 'cups',
	};

	state = {
		modalContent: null,
	};

	renderCups(cups) {
		return cups.map((cup, index) => (
			<CupTile
				key={index}
				name={cup.name}
				size={cup.size}
				onLongPress={() =>
					this.setState({
						modalContent: { ...cup, index: index },
					})
				}
			/>
		));
	}

	render() {
		const { me, navigation } = this.props;
		const { modalContent } = this.state;

		if (!me) return <LoadingScreen />;

		return (
			<ScreenContainer style={{ padding: 0 }}>
				<DeleteCupModal
					visible={modalContent !== null}
					onSuccess={() => {
						this.props.deleteCup(me, modalContent.index);
						this.setState({ modalContent: null });
					}}
					onFail={() => this.setState({ modalContent: null })}
				/>
				<ScrollView>
					<TileContainer>
						{this.renderCups(me.cups)}
						<AddTile
							onPress={() => navigation.navigate('NewCup')}
						/>
					</TileContainer>
				</ScrollView>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	me: state.users.me,
	loading: state.users.loading,
});

export default connect(mapStateToProps, actions)(CoffeeStation);
