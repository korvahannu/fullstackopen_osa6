
import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {

  const notification = useSelector(state => state.notification);

  const style = {
    marginTop:'24px',
    marginBottom:'24px',
    color:'orange',
    fontSize:'1.4em',
    fontWeight:'bold',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>

      {
        notification === ''
        ? null
        : `"${notification}"`
      }
    </div>
  )
}

export default Notification