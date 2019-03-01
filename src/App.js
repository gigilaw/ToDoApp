import React, { Component } from 'react'
import Todos from './Todos'

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: 'buy milk' },
			{ id: 2, content: 'play ultimate' },
		],
	}
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">Today's Todos</h1>
				<Todos todos={this.state.todos} />
			</div>
		)
	}
}

export default App
