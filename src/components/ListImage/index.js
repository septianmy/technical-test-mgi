import React from 'react'
import './ListImage.css'; 
import {Link} from 'react-router-dom';
const ListImage = (props) => {
    return (
        
        <div className="col-2">
            <Link to={`/detail/${props.id}`}>
            <div className="gallery">
                <img src={props.thumbnail}/>
                <div className="desc">{props.title}</div>
            </div>
            </Link>
        </div>
    )
}

export default ListImage
