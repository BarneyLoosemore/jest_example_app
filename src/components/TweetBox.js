import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class TweetBox extends React.Component {
    
    state = {
        tweet: ''
    }

    handleChange = event => this.setState({ tweet: event.target.value })
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.saveTweet(this.state.tweet)
        this.setState({ tweet: '' })
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Tweet</h4>
                <textarea value={this.state.tweet} onChange={this.handleChange} />
                <div>
                    <button>Send Tweet</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(TweetBox)