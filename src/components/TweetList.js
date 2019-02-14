import React from 'react'
import { connect } from 'react-redux'

class TweetList extends React.Component {

  renderTweets = () => {
    return this.props.tweets.map(tweet => 
      <li key={tweet}>{tweet}</li>
    )
  }

  render(){
    return (
      <div>
        <ul>
          {this.renderTweets()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { tweets: state.tweets }
}

export default connect(mapStateToProps)(TweetList)