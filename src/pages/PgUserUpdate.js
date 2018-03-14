import React, { Component } from 'react';

import UserApi from '../api/user';
import UserEditForm from '../forms/UserEditForm';


class PgUserCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: props.match.params.id
        };
    }


    componentDidMount() {
        document.title = "Update user";
        this.getUser();
    }


    async getUser() {
        // Get all users
        const user = await UserApi.getUser(this.state._id);
        this.setState({ ...this.state, ...user });
    }


    handleFormSubmit(user) {
        return async (event) => {
            event.preventDefault();

            if (!user.name) {
                return;
            }

            await UserApi.updateUser(this.state._id, user);
            window.location = '/';
        };
    }


    render() {
        const user = this.state;
        
        if (!user.name) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <UserEditForm user={user} onSubmitForm={this.handleFormSubmit.bind(this)} />
            </div>
        );
    }
}


export default PgUserCreate;
