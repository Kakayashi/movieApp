import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CommentWrapper } from './ComentComponent.style';
import { useParams } from "react-router-dom";


function ComentComponent() {
  const commentID = useParams();

  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/note/${commentID.commentID}`)
      .then(response => {
        console.log("ressss", response)
        setComment(response.data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <CommentWrapper>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>Comment:</h2>
          <div>description: {comment.description}</div>
          <div>amount: {comment.amount}</div>
          <div>user: {comment.user}</div>
          <div>movie_title: {comment.movie_title}</div>
        </div>
      )}
    </CommentWrapper>
  );
}

export default ComentComponent;
