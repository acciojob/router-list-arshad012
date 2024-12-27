import React, {useState} from "react";
import { useParams, Link } from 'react-router-dom';
import { UsersData } from "../Utils/UsersData";

const ItemDetail = () => {
    const {id} = useParams();

    let clickedUser = {};

    for(let i=0; i<UsersData.length; i++) {
        if(id == UsersData[i].id) {
            clickedUser = UsersData[i];
            break;
        }
    }

    return (
        <div>
            <h1>Item {id}</h1>
            <div key={clickedUser.id} className="user-div">
                <p>Id:{clickedUser.id}</p>
                <h3>Name: {clickedUser.name}</h3>
                <p>username; {clickedUser.username}</p>
                <p>Email: {clickedUser.email}</p>
                <p>Full Address below</p>
                <p>City: {clickedUser.address.city} <br/> ZipCode: {clickedUser.address.zipcode} <br/> Suite: {clickedUser.suite}</p>
                <p>Phone: {clickedUser.phone}</p>
                <p>Website: {clickedUser.website}</p>
                <p>Company name: {clickedUser.company.name}</p>
                <p>Company description: {clickedUser.company.catchPhrase}</p>
                <Link to='/'>Go back</Link>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default ItemDetail;