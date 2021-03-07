import React, { Component } from 'react'

const initialState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    country: '',
    gender: '',
    skills: []
}

class PostForm extends Component {
    constructor() {
        super();
        this.myForm = React.createRef()
    }
    state = {
        ...initialState
    };

    changeHandler = (event) => {
        if(event.target.type == 'checkbox') {
            if(event.target.checked) {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            } else {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== event.target.value)
                })
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

}

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.myForm.current.reset()
        this.setState({
            ...initialState
        })
    }

    render() {
        return (
            <form ref={ this.myForm } className="m-5" onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text"
                           className="form-control"
                           name="name" id="name"
                           placeholder="Enter your name"
                           value={ this.state.name }
                           onChange={ this.changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text"
                           className="form-control"
                           name="email" id="email"
                           placeholder="Enter your email"
                           value={ this.state.email }
                           onChange={ this.changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                           className="form-control"
                           name="password" id="password"
                           placeholder="Enter your password"
                           value={ this.state.password }
                           onChange={ this.changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio: </label>
                    <textarea
                           className="form-control"
                           name="bio" id="bio"
                           placeholder="Enter your bio"
                           value={ this.state.bio }
                           onChange={ this.changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country: </label>
                    <select
                        className="form-control"
                        name="country" id="country"
                        onChange={ this.changeHandler }>
                        <option selected disabled>Select your country</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="australia">Australia</option>
                        <option value="germany">Germany</option>
                        <option value="india">India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Gender: </label>
                    <div className="form-check">
                        <input onChange={ this.changeHandler } type="radio" name="gender" id="gender1" value="male"/>
                        <label htmlFor="gender1">Male</label>
                    </div>
                    <div className="form-check">
                        <input onChange={ this.changeHandler } type="radio" name="gender" id="gender2" value="female"/>
                        <label htmlFor="gender2">Female</label>
                    </div>
                    <div className="form-check">
                        <input onChange={ this.changeHandler } type="radio" name="gender" id="gender3" value="other"/>
                        <label htmlFor="gender3">Other</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="skills">Skills: </label>
                    <div className="form-check">
                        <input className="form-check-input" name="skills" onChange={ this.changeHandler } type="checkbox" id="js" value="Javascript"/>
                        <label htmlFor="js">Javascript</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="skills" onChange={ this.changeHandler } type="checkbox" id="php" value="PHP"/>
                        <label htmlFor="php">PHP</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="skills" onChange={ this.changeHandler } type="checkbox" id="py" value="Python"/>
                        <label htmlFor="py">Python</label>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
