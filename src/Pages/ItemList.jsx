import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { UsersData } from '../Utils/UsersData';


const ItemList = () => {
    const [users, setUsers] = useState(UsersData);

    return (
        <div>
            <h1>Item List</h1>
            <hr />
            <div>
                {
                    users.map((user) => (
                        <div key={user.id} className="user-div">
                            <p>Id:{user.id}</p>
                            <Link to={'/item/' + user.id}><h3>Name: {user.name}</h3></Link>
                            <p>Email: {user.email}</p>
                            <p>City: {user.address.city}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList;