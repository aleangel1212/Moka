import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import RootStack from './router';

class App extends Component {
	render() {
		return (
			<Provider
				store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
			>
				<RootStack />
			</Provider>
		);
	}
}

export default App;
