import React, { Component } from 'react';
import user from './images/user.jpg';
import './App.css';
import { store } from './stores/index';

class App extends Component {
	render() {
		const { description, likes, name, location } = store.getState();
		return (
			<div className="App">
				<section className="User__img">
					<img src={user} alt="user" />
				</section>

				<section className="User__info">
					<p>
						{' '}
						<span className="faint">I am</span> a {description}
					</p>
					<p>
						{' '}
						<span className="faint">I like</span> {likes}
					</p>

					<p className="User__info__details User__info__divider faint">
						<span>Name: </span>
						<span>{name}</span>
					</p>
					<p className="User__info__details faint">
						<span>Location: </span>
						<span>{location}</span>
					</p>
				</section>
			</div>
		);
	}
}

export default App;
