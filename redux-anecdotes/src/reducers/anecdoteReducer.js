import anecdoteServices from '../services/anecdoteServices';

const reducer = (state = [], action) => {

  switch(action.type)
  {
    case 'VOTE':
      const id = action.data.id;
      const note = state.find(n => n.id === id);
      note.votes++;
      return state.map(n => n.id !== id ? n : note);
    
    case 'NEW':
      return [...state, action.data];
    
    case 'INIT':
      return action.data;
    
    default:
      return state;
  }
}

export const voteAnecdote = (anecdote) => {


  return async dispatch => {
    const votedAnecdote = await anecdoteServices.voteAnecdote(anecdote);
    dispatch({type:'VOTE', data:votedAnecdote});
  };

};

export const addNewAnecdote = (data) => {

  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(data);
    dispatch({type:'NEW', data:newAnecdote})
  };
}

export const initializeAnecdcotes = () => {

  return async dispatch => {
    const data = await anecdoteServices.getAll();
    dispatch({type: 'INIT', data})
  };

};

export default reducer