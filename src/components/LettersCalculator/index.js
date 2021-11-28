import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onEnterLetter = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="cal-container">
        <div className="bottom-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="cal-image"
            alt="calculate"
          />
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="search-head" htmlFor="phrase">
              Enter the phrase
            </label>
            <input
              type="text"
              className="search-input"
              id="phrase"
              placeholder="Enter the phrase"
              onChange={this.onEnterLetter}
            />
            <div className="count-container">
              <p className="count">No.of letters: {searchInput.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
