import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './components/app';

const Root = () => (
	<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
		<App />
	</Provider>
);

export default Root;
