import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { CommentWrapper,CommentData,Comment,CommentTitle } from './ComentComponent.style';


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
        <CommentTitle>Loading...</CommentTitle>
      ) : (
        <>
        <CommentTitle>Comment info:</CommentTitle>
        <Comment>
          <CommentData><span>description: </span> {comment.description}</CommentData>
          <CommentData><span>amount: </span> {comment.amount}</CommentData>
          <CommentData><span>user: </span> {comment.user}</CommentData>
          <CommentData><span>movie_title: </span> {comment.movie_title}</CommentData>
          <CommentData><span>movie_id: </span> {comment.movie_id}</CommentData>
        </Comment>
        </>
      )}
    </CommentWrapper>
  );
}

export default ComentComponent;
