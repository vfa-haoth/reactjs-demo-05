import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    onSignIn = (event) => {
        event.preventDefault();
        var { username, password } = this.state;
        if (username === 'taser' && password === 'face') {
            localStorage.setItem('user', JSON.stringify({
                username: username,
                password: password
            }))
        }
    }

    render() {
        var { username, password } = this.state;
        var loggedInUser = localStorage.getItem('user');


        if (loggedInUser !== null) {
            var { location } = this.props;
            console.log(location)
            return (
                <Redirect
                    to={{
                        pathname: '/products',
                        state: {
                            from: location,
                        }
                    }}
                />
            )
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <form onSubmit={this.onSignIn}>
                            <legend>Sign in</legend>

                            <div className="form-group">
                                <label>Username : </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    className="form-control"
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password : </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="form-control"
                                    onChange={this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
