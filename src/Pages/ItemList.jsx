import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { UsersData } from '../Utils/UsersData';

const ItemList = () => {
    const [items, setItems] = useState(new Array(3).fill('Item'));
    
    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}><Link to={'/item/'+(index+1)}>{item} {index+1}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemList;