
import React from 'react';
import { connect } from 'react-redux';

const Notification = (props) => {

  const notification = props.notification;

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

const stateToProps = (state) => {
  return { notification: state.notification  };
};

export default connect(stateToProps, null)(Notification);