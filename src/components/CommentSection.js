import React, { useState } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

import { addComment } from "../actions";

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const Comments = (props) => {
  const [comment, setComment] = useState("");

  const postComment = (event) => {
    event.preventDefault();
    props.addComment(comment);
    setComment("");
  };

  return (
    <div className='comments-container'>
      <h3 className='comments-heading'>{props.comments.length} COMMENTS</h3>

      <form onSubmit={postComment} className='comments-input'>
        <input
          placeholder='Add a comment'
          type='text'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <hr />
      </form>
      <div className='comments-list'>
        {props.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { addComment })(Comments);
