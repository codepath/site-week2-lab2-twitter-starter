import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (changeEvent) => {
    props.setTweetText(changeEvent.target.value)
  }
  let newTweet
  const handleOnSubmit = () => {
    newTweet = {
      'id': props.tweets.length,
      'name': props.userProfile.name,
      'handle': props.userProfile.handle,
      'text': props.tweetText,
      'comments': 0,
      'retweets': 0,
      'likes': 0,
    }
    props.setTweets([].concat(props.tweets, [newTweet]))
    props.setTweetText('')
  }
  return (
    <div className="tweet-box">
      <TweetInput value={ props.tweetText } handleOnChange={ handleOnTweetTextChange } />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={ handleOnSubmit } />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={ handleOnSubmit }>Tweet</button>
    </div>
  )
}
