// import _ from 'lodash';
// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyComponent from './components/MyComponent';
// import SearchBar from './components/VideoPage/search_bar';
// import YTSearch from 'youtube-api-search';
// import VideoList from './components/VideoPage/video_list';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {deepOrange500} from 'material-ui/styles/colors';
// import VideoDetail from './components/VideoPage/video_detail'

// const API_KEY = 'AIzaSyAClrOd78Rb03l60mZ30fSytX6SxmQcCbI';
// const muiTheme = getMuiTheme({
// 	palette: {
// 	accent1Color: deepOrange500,
// 	},
// });


// class App extends Component {

// 	constructor(){
// 		super();
// 		this.state = {
// 			videos: [],
// 			selectedVideo: null,
// 		}
// 		this.videoSearch('dota wtf')
// 	}

// 	videoSearch(term) {
// 		YTSearch({key: API_KEY, term: term}, (videos) => {
// 			this.setState({ 
// 				videos : videos,
// 				selectedVideo: videos[0]
// 			})
// 		})
// 	}

// 	render() {

// 		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000)
// 		return (
// 			<MuiThemeProvider muiTheme={muiTheme}>
// 				<div>
// 					<SearchBar onVideoSearch={videoSearch}/>
// 					<VideoDetail video={this.state.selectedVideo} />
// 					<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
// 				</div>
// 			</MuiThemeProvider>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById("app")
// )

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/Weather/app';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Route path="/app" component={App}/>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById("app")
)

