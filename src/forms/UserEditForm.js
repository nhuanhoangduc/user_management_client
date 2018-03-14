import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class UserEditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            address: '',
            ...props.user
        };
    }


    handleUserInput(event) {
        const propertyName = event.target.name;
        const value = event.target.value;

        this.setState({ [propertyName]: value });
    }


    render() {
        const user = this.state;
        const { onSubmitForm } = this.props;


        return (
            <form onSubmit={onSubmitForm(this.state)}>
                {/* User name */}
                <div className="form-group">
                    <label>User name (*)</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        className="form-control"
                        placeholder="Enter user name"
                        required="required"
                        onChange={this.handleUserInput.bind(this)}
                    />
                </div>


                {/* Email address */}
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleUserInput.bind(this)}
                    />
                </div>


                {/* Address */}
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        className="form-control"
                        placeholder="Enter address"
                        onChange={this.handleUserInput.bind(this)}
                    />
                </div>


                <button type="submit" className="btn btn-primary mr-1">Submit</button>
                <Link to="/" className="btn btn-default">Cancel</Link>
            </form>
        );
    }
}


export default UserEditForm;