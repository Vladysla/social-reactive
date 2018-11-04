import React, {Component, Fragment} from 'react'


class Join extends Component {
    constructor(){
        super()
        this.state = {
            register: false
        }
        this.toggleRegister = this.toggleRegister.bind(this)
    }
    renderLogin(){
        return(
            <Fragment>
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <span onClick={this.toggleRegister} className="d-block text-center mt-2 small toggle-sign">Register</span>
                </form>
            </Fragment>
        )
    }

    renderRegister(){
        return (
            <Fragment>
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin">
                    <div className="form-label-group">
                        <input type="text" id="inputUserame" className="form-control" placeholder="Username" required />
                        <label htmlFor="inputUserame">Username</label>
                    </div>
                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <hr/>
                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="form-label-group">
                        <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required />
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
            register: !prevState.register
        }))
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
                                {(!this.state.register) ? this.renderLogin() : this.renderRegister()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Join