import React from 'react';
import './style.css';

function ShowPost(props){

return (
    <div className='post'>
    <div className='photo_author'>
        <img src={props.author.photo} alt='photo_author'/></div>
    <div className='post_content'>
        <div className='first-line'>
        <h4>{props.author.name}</h4>
        <p>{props.author.nickname}</p>
        <p>•</p>
        <p>{props.date}</p>
        </div>
        <div className='comment'><p>{props.content}</p></div>
        <img src={props.image} alt='photo_image'/>
    </div>    
    </div>
);
}
export default ShowPost;