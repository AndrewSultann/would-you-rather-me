import React from 'react'
import {connect} from 'react-redux'

class Question extends React.Component {
    render(){
        const {question, user} = this.props
        console.log(question)
        const {optionOne, optionTwo} = question
        return (
            <div className='question'>
                <div className='asker'>{user.name} Asks:</div>
                <div className='body container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='image'><img src={user.avatarURL} /></div>
                        </div>
                        <div className='col-md-8'>
                            <div className='info'>
                                <p>Would you rather?</p>
                                <p>{optionOne.text}</p>
                                <p>{optionTwo.text}</p>
                                <button className='btn results'>Results</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}){
    const question = questions[id]
    return {
        question: question ? question : null,
        user: users[authedUser] ? users[authedUser] : null
    }
}
export default connect(mapStateToProps)(Question);