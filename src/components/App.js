import React, { Fragment, Segment } from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import NewPoll from './NewPoll'
import QuestionPoll from './QuestionPoll'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'
import Nav from './Nav'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    console.log(this.props)
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading 
              ? null
              : <Fragment>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/new' component={NewPoll} />
                    <Route path='/questions/:id' component={QuestionPoll} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route component={NoMatch} />
                  </Switch>
                </Fragment>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading:  authedUser === null
  }
}
export default connect(mapStateToProps)(App);