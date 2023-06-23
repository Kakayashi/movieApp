import React, { useState, useEffect } from 'react';
import Banner from '../atoms/banner/Banner';
import CustomInputComponent from '../atoms/input/CustomInput';
import { EditWrapper } from './CommentEdit.style';
import CustomButton from '../atoms/button/CustomButton';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CommentEdit() {
  const [amount, setAmount] = useState('');
  const [text, setText] = useState('');
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { commentID } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/note/${commentID}`)
      .then(response => {
        setComment(response.data.data);
        setText(response.data.data.description);
        setAmount(response.data.data.amount);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [commentID]);

  const handleEdit = () => {
    const updatedComment = {
      description: text,
      amount: amount
    };
    console.log("url", `http://localhost:8000/api/note/update/${commentID}`)
    axios
      .put(`http://localhost:8000/api/note/update/${commentID}`, updatedComment)
      .then(response => {
        console.log('Comment updated:', response);
        // Dodaj tutaj odpowiednie informacje o aktualizacji komentarza
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Banner title={'Comment Edit'} />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <EditWrapper>
          <h1>Edit</h1>
          <CustomInputComponent label={'User'} value={amount} setValue={setAmount} />
          <CustomInputComponent label={'Text'} rows={4} value={text} setValue={setText} />
          <CustomButton text={'Edit'} func={handleEdit} />
        </EditWrapper>
      )}
    </>
  );
}

export default CommentEdit;
