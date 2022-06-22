import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnKeyUp = () => {
    props.setIsDisabledSubmitButton(props.tweetText.length === 0 || props.tweetText.length > 140 ? true : false)
  }
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
      <TweetInput value={ props.tweetText } handleOnChange={ handleOnTweetTextChange } handleOnKeyUp={ handleOnKeyUp } />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={ props.tweetText } />
        <TweetSubmitButton handleOnSubmit={ handleOnSubmit } isDisabled={ props.isDisabledSubmitButton }/>
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

export function TweetCharacterCount({ tweetText }) {
  let charsLeft = 140 - tweetText.length
  const isNegative = charsLeft < 0
  if (tweetText.length > 0) {
    return <span className={"tweet-length " + (isNegative ? "red": "")}>{ charsLeft }</span>
  } else {
    return null
  }
}

export function TweetSubmitButton({ handleOnSubmit, isDisabled }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled={ isDisabled } onClick={ handleOnSubmit }>Tweet</button>
    </div>
  )
}
