import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const rateGood = () => {
    store.dispatch({type:'GOOD'});
  };

  const rateOk = () => {
    store.dispatch({type:'OK'});
  }

  const rateBad = () => {
    store.dispatch({type:'BAD'});
  }

  const resetRatings = () => {
    store.dispatch({type:'ZERO'});
  }

  return (
    <div>
      <button onClick={rateGood}>good</button> 
      <button onClick={rateOk}>ok</button> 
      <button onClick={rateBad}>bad</button>
      <button onClick={resetRatings}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
