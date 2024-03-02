// Write your React code here.
// Write your React code here.
import {Component} from 'react'
import Emoji from '../Emoji'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: true}

  feedback = () => {
    this.setState({isFeedbackGiven: false})
  }

  check = () => {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props

    if (isFeedbackGiven === true) {
      return (
        <div className="feedback-container">
          <h1 className="feedback-question">
            How satisfied are you with our customer support performance?
          </h1>
          <ul>
            {resources.emojis.map(each => (
              <Emoji emojis={each} key={each.id} feedback={this.feedback} />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="feedback-container">
        <img src={resources.loveEmojiUrl} alt="love emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    return <div className="whole-container">{this.check()}</div>
  }
}
export default Feedback
