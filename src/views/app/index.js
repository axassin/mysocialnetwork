import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/Weather/app';
import PostShow from './components/PostPage/show';
import PostIndex from './components/PostPage/index';
import PostNew from './components/PostPage/new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/posts/new" component={PostNew} />
					<Route path="/posts/:id" component={PostShow} />
					<Route path="/" component={PostIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById("app")
)

