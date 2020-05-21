import React from 'react'
import Nav from './Nav'
import Question from './Question'
import {connect} from 'react-redux'

class Home extends React.Component {
    render(){
        const {questionsUnanswered, questionsAnswered} = this.props.DataForUser
        return (
            <div className='container'>
                <div className='questions-tabs'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="unanswered-tab" data-toggle="tab" href="#unanswered" role="tab" aria-controls="unanswered" aria-selected="true">Unanswered</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="answered-tab" data-toggle="tab" href="#answered" role="tab" aria-controls="answered" aria-selected="false">Answered</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="unanswered" role="tabpanel" aria-labelledby="unanswered-tab">
                            <ul>
                                {questionsUnanswered.map(id => (
                                    <li key={id}>
                                        <Question id={id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="answered-tab">
                            <ul>
                                {questionsAnswered.map(id => (
                                    <li key={id}>
                                        <Question id={id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({questions, users, authedUser}){
    // A BIG NOTE:
    // my questionsAnswered gave me error because I was trying to access the redux store (users array) and I didn't notice that It needed 1 sec to be retrieved from the API, in the loading state in App component you need to make sure that your UI will not render before your redux by setting a condition of the last dispatch(authedUser) === null
    const questionsId = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)

    // reverse to list them from new to old
    const questionsAnswered = Object.keys(users[authedUser].answers).reverse()
    const questionsUnanswered = questionsId.filter(id => !questionsAnswered.includes(id))
    return {
        DataForUser: {
            authedUser,
            questionsAnswered,
            questionsUnanswered
        }

    }
}
export default connect(mapStateToProps)(Home);