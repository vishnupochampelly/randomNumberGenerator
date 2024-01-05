import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onRandom = () => {
    const randomNum = parseInt(Math.random() * 100)

    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" type="button" onClick={this.onRandom}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
