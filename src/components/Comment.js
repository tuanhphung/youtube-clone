import React from "react";
import thumbsup from "../assets/thumbsup.svg";
import thumbsdown from "../assets/thumbsdown.svg";
import avatar from "../assets/user.svg";

const Comment = (props) => {
  return (
    <div className='comment'>
      <div className='comment__avatar '>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='comment__display'>
        {props.comment}
        <div className='comments_icon__bar'>
          <img src={thumbsup} alt='thumbsup' className='comments__icon' />
          <img src={thumbsdown} alt='thumbsdown' className='comments__icon' />
          <button>REPLY</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
