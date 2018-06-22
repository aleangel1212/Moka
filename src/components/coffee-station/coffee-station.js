import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
	NavMenu,
	ScreenContainer,
	LoadingScreen,
	TileContainer,
} from '../common';

import CoffeeDetail from './coffee-detail';
import CoffeeTile from './coffee-tile';
import AddTile from './add-tile';
import DeleteModal from './delete-modal';

import * as actions from '../../actions';

class CoffeeStation extends Component {
	static navigationOptions = {
		title: 'coffee station',
	};

	state = {
		modalContent: null,
	};

	renderPrefs(prefs) {
		return prefs.map((pref, index) => (
			<CoffeeTile
				key={index}
				pref={pref}
				onPress={() =>
					this.props.setDefaultCoffee(this.props.me, index + 1)
				}
				onLongPress={() =>
					this.setState({
						modalContent: { ...pref, index: index + 1 },
					})
				}
			/>
		));
	}

	render() {
		const { me, loading, navigation } = this.props;
		const { modalContent } = this.state;

		if (!me) return <LoadingScreen />;

		return (
			<NavMenu navigation={navigation}>
				<ScreenContainer style={{ padding: 0 }}>
					<DeleteModal
						visible={modalContent !== null}
						cupValues={modalContent || {}}
						onSuccess={() => {
							this.props.deleteCoffee(me, modalContent.index);
							this.setState({ modalContent: null });
						}}
						onFail={() => this.setState({ modalContent: null })}
					/>
					<ScrollView>
						<CoffeeDetail pref={me.prefs[0]} loading={loading} />
						<TileContainer>
							{this.renderPrefs(me.prefs.slice(1))}
							<AddTile
								onPress={() =>
									this.props.navigation.navigate('NewCoffee')
								}
							/>
						</TileContainer>
					</ScrollView>
				</ScreenContainer>
			</NavMenu>
		);
	}
}

const mapStateToProps = state => ({
	me: state.users.me,
	loading: state.users.loading,
});

export default connect(mapStateToProps, actions)(CoffeeStation);
