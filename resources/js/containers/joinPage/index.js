import React, {Component, Fragment} from 'react'


class Join extends Component {
    constructor(){
        super()
        this.state = {
            showRegister: false,
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        }
        this.toggleRegister = this.toggleRegister.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }
    renderLogin(){
        const {email, password} = this.state
        return(
            <Fragment>
                <h5 className="card-title text-center">Sign In</h5>
                <form onSubmit={this.handleLoginSubmit} className="form-signin">
                    <div className="form-label-group">
                        <input
                            onChange={this.handleInputChange}
                            value={email}
                            name="email"
                            type="text"
                            id="inputEmail"
                            className={(this.state.errors.email) ? 'form-control is-invalid': 'form-control'}
                            placeholder="Email address"
                        />
                        <label htmlFor="inputEmail">Email address</label>
                        <div className="invalid-feedback">{` • ${this.state.errors.email}`}</div>
                    </div>
                    <div className="form-label-group">
                        <input
                            onChange={this.handleInputChange}
                            value={password}
                            name="password"
                            type="password"
                            id="inputPassword"
                            className={(this.state.errors.password) ? 'form-control is-invalid': 'form-control'}
                            placeholder="Password"
                        />
                        <label htmlFor="inputPassword">Password</label>
                        <div className="invalid-feedback">{` • ${this.state.errors.password}`}</div>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" name="remember" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <span onClick={this.toggleRegister} className="d-block text-center mt-2 small toggle-sign">Register</span>
                </form>
            </Fragment>
        )
    }

    renderRegister(){
        const {username, email, password, password_confirmation} = this.state
        return (
            <Fragment>
                <h5 className="card-title text-center">Register</h5>
                <form onSubmit={this.handleRegisterSubmit} className="form-signin" method="post">
                    <div className="form-label-group">
                        <input
                            onChange={this.handleInputChange}
                            name="username"
                            value={username}
                            type="text" id="inputUserame"
                            className={(this.state.errors.username) ? 'form-control is-invalid': 'form-control'}
                            placeholder="Username"
                        />
                        <label htmlFor="inputUserame">Username</label>
                        <div className="invalid-feedback">{` • ${this.state.errors.username}`}</div>
                    </div>
                    <div className="form-label-group">
                        <input
                            onChange={this.handleInputChange}
                            name="email"
                            value={email}
                            type="text"
                            id="inputEmail"
                            className={(this.state.errors.email) ? 'form-control is-invalid': 'form-control'}
                            placeholder="Email address"
                        />
                        <label htmlFor="inputEmail">Email address</label>
                        <div className="invalid-feedback">{` • ${this.state.errors.email}`}</div>
                    </div>
                    <hr/>
                    <div className="form-label-group">
                        <input
                            onChange={this.handleInputChange}
                            name="password"
                            value={password}
                            type="password"
                            id="inputPassword"
                            className={(this.state.errors.password) ? 'form-control is-invalid': 'form-control'}
                            placeholder="Password"
                        />
                        <label htmlFor="inputPassword">Password</label>
                        <div className="invalid-feedback">{` • ${this.state.errors.password}`}</div>
                    </div>
                    <div className="form-label-group">
                        <input
                            onChange={this.handleInputChange}
                            name="password_confirmation"
                            value={password_confirmation}
                            type="password"
                            id="inputConfirmPassword"
                            className="form-control"
                            placeholder="Password"
                        />
                        <label htmlFor="inputConfirmPassword">Confirm password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                    <span onClick={this.toggleRegister} className="d-block text-center mt-2 small toggle-sign">Sign In</span>
                </form>
            </Fragment>
        )
    }

    toggleRegister(){
        this.setState((prevState) => ({
            showRegister: !prevState.showRegister
        }))
    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegisterSubmit(e) {
        const {username, email, password, password_confirmation} = this.state
        e.preventDefault()
        axios.post('/api/register', {
            username,
            email,
            password,
            password_confirmation
        })
        .then(response => {
            if (response.data.errors){
                this.setState({
                    errors: response.data.errors
                })
            } else {
                this.setState({
                    errors: {}
                })
                window.location = '/'
            }
        })
        .catch(err => {
            this.setState({
                errors: {
                    email: 'We doesn\'t have user with that email and password'
                }
            })
        })
    }

    handleLoginSubmit(e) {
        e.preventDefault()
        const {email, password} = this.state
        axios.post('/api/login', {
            email,
            password
        })
        .then(response => {
            if (response.data.errors){
                this.setState({
                    errors: response.data.errors
                })
            } else {
                this.setState({
                    errors: {}
                })
                window.location = '/'
            }
        }).catch(err => {
            this.setState({
                errors: {
                    email: 'We doesn\'t have user with that email and password'
                }
            })
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-img-left d-none d-md-flex">
                            </div>
                            <div className="card-body">
                                {(!this.state.showRegister) ? this.renderLogin() : this.renderRegister()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Join