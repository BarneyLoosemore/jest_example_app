import React from 'react'

class TweetBox extends React.Component {

  state = { tweet: '' }

  handleChange = event => this.setState({ tweet: event.target.value })

  handleSubmit = (event) => {
    event.preventDefault()

    // Call an action creator
    // and save the tweet

    this.setState({ tweet: '' })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <h4>Add a Tweet</h4>
        <textarea onChange={this.handleChange} value={this.state.tweet} />
        <div>
          <button>Submit Tweet</button>
        </div>
      </form>
    )
  }
}

export default TweetBox