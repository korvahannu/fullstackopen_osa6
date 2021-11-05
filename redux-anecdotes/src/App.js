import React, {useEffect} from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

import { useDispatch } from 'react-redux';
import { initializeAnecdcotes } from './reducers/anecdoteReducer';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdcotes());
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App