

const notificationReducer = (state = '', action) => {

  switch(action.type)
  {
    case 'SET_NOTIFICATION':
      return state = action.notification;
    
    case 'EMPTY_NOTIFICATION':
      return '';
    
    default:
      return state;
  }
};

export const setNotification = (notification, time) => {

  return async dispatch => {

    dispatch({type:'SET_NOTIFICATION', notification});
    setTimeout(() => dispatch(emptyNotification()), time*1000);

  };
};

export const emptyNotification = notification => {
  return {
    type: 'EMPTY_NOTIFICATION'
  }
};


export default notificationReducer;