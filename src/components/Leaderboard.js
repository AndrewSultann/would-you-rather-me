import React, {Component} from 'react'
import {connect} from 'react-redux'

class Leaderboard extends Component {
    render(){
        const {users} = this.props
        return (
            <div className='leaderboard'>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className='leaderboard-card'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='image'><img src={user.avatarURL} /></div>
                            </div>
                            <div className='col-md-6'>
                                <div className='info'>
                                    <h5>{user.name}</h5>
                                    <p>Answered Questions <span>{Object.keys(user.answers).length}</span></p>
                                    <p>Created Questions <span>{user.questions.length}</span></p>
                                </div> 
                            </div>
                            <div className='col-md-2'>
                                <div className='score'>
                                    <h5>Score</h5>
                                    <p>{Object.keys(user.answers).length + user.questions.length}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}){

    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Leaderboard);