// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0, isTimeRunning: false}

  timeInMinutesAndSeconds = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)

    const minutesInString = minutes > 9 ? minutes : `0${minutes}`
    const secondsInString = seconds > 9 ? seconds : `0${seconds}`

    return `${minutesInString}:${secondsInString}`
  }

  isStart = () => {
    this.setTimeInterval = setInterval(() => {
      this.setState(prevState => ({
        timeInSeconds: prevState.timeInSeconds + 1,
      }))
    }, 1000)
    this.setState({isTimeRunning: true})
  }

  isStop = () => {
    clearInterval(this.setTimeInterval)
    this.setState({isTimeRunning: false})
  }

  isRestart = () => {
    clearInterval(this.setTimeInterval)
    this.setState({isTimeRunning: false, timeInSeconds: 0})
  }

  render() {
    const {isTimeRunning} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="time">{this.timeInMinutesAndSeconds()}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button start"
              onClick={this.isStart}
              disabled={isTimeRunning}
            >
              Start
            </button>
            <button type="button" className="button stop" onClick={this.isStop}>
              Stop
            </button>
            <button
              type="button"
              className="button restart"
              onClick={this.isRestart}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
