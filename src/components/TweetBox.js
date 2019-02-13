import React from 'react'

class TweetBox extends React.Component {
    
    state = {
        tweet: ''
    }

    handleChange = event => this.setState({ tweet: event.target.value })
    
    handleSubmit = event => {
        event.preventDefault()
        // Call an action creator using Redux
        // Save the Tweet
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

export default TweetBox