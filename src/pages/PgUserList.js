import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserApi from '../api/user';


export const UserItem = function({ user, onDeleteUser }) {
    return (
        <div className="p-2 flex bg-gray">
            {/* User information */}
            <div className="flex-1">
                <h5>
                    {/* User name */}
                    <span className="mr-3">{ user.name }</span>

                    {/* User email */}
                    <small className="text-muted">
                        <em>{user.email}</em>
                    </small>
                </h5>


                {/* Address */}
                <p className="mb-0">{ user.address }</p>


                {/* Updated time */}
                <small className="text-muted">Updated: { user.updatedTime }</small>
            </div>


            {/* Action buttons */}
            <div className="flex-middle">
                <div>
                    <Link to={ '/update/' + user._id } className="btn btn-xs btn-info mr-1">Edit</Link>
                    <button className="btn btn-xs btn-danger" onClick={ onDeleteUser(user._id) } >Remove</button>
                </div>
            </div>
        </div>
    );
};


class PgUserList extends Component {

    constructor() {
        super();

        this.state = {};
    }


    async getUsers() {
        // Get all users
        const users = await UserApi.getUsers();
        this.setState({ users });
    }
    

    componentDidMount() {
        this.getUsers();
    }


    handleDeleteUser(userId) {
        return async () => {
            if (!window.confirm('Are you sure to delete?')) {
                return;
            }

            await UserApi.deleteUser(userId);
            await this.getUsers();
        };
    }


    render() {
        const { users } = this.state;
        
        if (!users) {
            return <div>Loading...</div>
        }


        return (
            <div className="pg-user-list">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <Link to="/create" className="btn btn-primary">
                            Create User
                        </Link>
                    </div>
                </div>

                {/* User list */}
                {users.map((user) =>
                    <div className="row mb-2" key={user._id}>
                        <div className="col-md-12">
                            <UserItem user={ user } onDeleteUser={this.handleDeleteUser.bind(this)} />
                        </div>
                    </div>
                )}
                
            </div>
        );
    }
}


export default PgUserList;
