import {getInitialData} from '../utils/api'
import {setAuthUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (users, questions) {
    return {
        type: RECEIVE_DATA,
        users,
        questions,
    }
}

const AUTHED_USER = 'andrewsultan'
export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveData(users, questions))
                dispatch(setAuthUser(AUTHED_USER))
                dispatch(hideLoading())
            })
    }
}