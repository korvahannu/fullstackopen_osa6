import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const newAnecdote = (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    dispatch(addNewAnecdote(content));
    
  };

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
};

export default AnecdoteForm;