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
            <p>Description for Item {id}</p>
        </div>
    )
}

export default ItemDetail;