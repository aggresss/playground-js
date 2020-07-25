import React from 'react'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { color: 'white' }
	}

	render() {
		return <div className='App' style={{ backgroundColor: this.state.color }}>
			<div>
				<div className='container'>
					<div className='picker-container'>
						<h1>Pick your favorit color!</h1>
						<input
							className='picker'
							onChange={event => this.setState({ ...this.state, color: event.target.value })}
							type='color'
							value={this.state.color} />
					</div>
				</div>
			</div>
		</div>
	}
}
