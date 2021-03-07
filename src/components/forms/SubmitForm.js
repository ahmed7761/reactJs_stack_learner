import React, { Component } from 'react';
import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class SubmitForm extends Component {
    state = {
        title: '',
        body: '',
        userId: '123',
        isSubmitted: false,
        error: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/posts`, {
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
        })
            .then(res => {
                this.setState({
                    isSubmitted: true,
                    error: false
                })
                console.log(res)
            })
            .catch(error => {
                this.setState({
                    error: true,
                    isSubmitted: false
                })
            })
    }

    render() {
        return (
            <form onSubmit={ this.submitHandler }>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={ this.state.title }
                    placeholder='Enter your title'
                    onChange={ this.changeHandler }
                />
                <textarea
                    className="form-control"
                    name="body"
                    value={ this.state.body }
                    placeholder='Enter your text'
                    onChange={ this.changeHandler }
                />
                <button type='submit' className='btn btn-primary'>Submit</button>

                { this.state.isSubmitted && <p> Form Submitted Successfully </p> }
                { this.state.error && <p> Error Occured </p> }

            </form>


        )
    }
}

export default SubmitForm

