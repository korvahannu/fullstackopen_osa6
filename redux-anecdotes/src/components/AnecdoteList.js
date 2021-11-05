import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { useSelector, useDispatch } from 'react-redux';

import { setNotification, emptyNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(voteAnecdote(id));

    dispatch(setNotification(`you voted for ${content}`));
    setTimeout(() => dispatch(emptyNotification()), 5000);
  }

  return(
    <div>
      {anecdotes.filter(current => current.content.toLowerCase().includes(filter))
      .sort((a,b)=>b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>

  );
};

export default AnecdoteList;