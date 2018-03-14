import React, { Component } from 'react';

import UserApi from '../api/user';
import UserEditForm from '../forms/UserEditForm';


class PgUserCreate extends Component {

    componentDidMount() {
        document.title = "Create user";
    }


    handleFormSubmit(user) {
        return async (event) => {
            event.preventDefault();

            if (!user.name) {
                return;
            }

            await UserApi.createUser(user);
            window.location = '/';
        };
    }


    render() {
        return (
            <div>
                <UserEditForm onSubmitForm={this.handleFormSubmit.bind(this)} />
            </div>
        );
    }
}


export default PgUserCreate;
