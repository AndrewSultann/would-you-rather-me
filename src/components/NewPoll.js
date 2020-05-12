import React from 'react'


class NewPoll extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({optionOne: '', optionTwo: ''})
    }
    disabled = () => {
        return this.state.optionOne === '' || this.state.optionTwo === ''
    }
    render(){
        const {optionOne, optionTwo} = this.state
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='form-container'>
                            <div className='form-top'><h2>Create New Poll</h2></div>
                            <div className='form-body'>
                                <p>Complete the question</p>
                                <p><b>Would you rather..</b></p>
                                <form onSubmit={this.handleSubmit}>
                                    <input type='text' name='optionOne' value={optionOne} placeholder='Enter Option One..' onChange={this.handleChange} />
                                    <div className='divider'>
                                    <span>OR</span>
                                        <hr></hr>
                                    </div>
                                    <input type='text' name='optionTwo' value={optionTwo} placeholder='Enter Option Two..' onChange={this.handleChange} />
                                    <button type='submit' className='btn btn-submit' disabled={this.disabled()}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPoll