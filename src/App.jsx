import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"

export default function App() {
  const [userProfile, setUserProfile] = React.useState(codepathUserProfile)
  const [tweets, setTweets] = React.useState([firstTweet])
  const [tweetText, setTweetText] = React.useState('')
  const [isDisabledSubmitButton, setIsDisabledSubmitButton] = React.useState(true)
  return (
    <div className="app">
      <Navbar navLinks={ navLinks } />
      <main>
        <UserProfile userProfile={ userProfile } />
        <Feed tweets = { tweets } setTweets={ setTweets } userProfile={ userProfile } 
        tweetText={ tweetText } setTweetText={ setTweetText } 
        isDisabledSubmitButton={ isDisabledSubmitButton }
        setIsDisabledSubmitButton={ setIsDisabledSubmitButton } />
        <Advertisements />
      </main>
    </div>
  )
}
