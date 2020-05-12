import React, { Fragment } from 'react';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import NewPoll from './NewPoll'
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
              : <div>
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/new' component={NewPoll}></Route>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({users}){
  return {
    loading:  users === null
  }
}
export default connect(mapStateToProps)(App);
