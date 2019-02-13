import React from 'react'

import TweetBox from 'components/TweetBox'
import TweetList from 'components/TweetList'

class App extends React.Component {

  render(){
    return(
      <div>
        <TweetBox />
        <TweetList /> 
      </div>
    )
  }
}

export default App