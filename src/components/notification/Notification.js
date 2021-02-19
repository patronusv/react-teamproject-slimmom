import React from 'react';
import { useSelector } from 'react-redux';
import { NotifWrapper } from './Notification.styled';

const Notification = ({ text, icon = '', error = '', alert = '' }) => {
  return (
    <NotifWrapper error={error} alert={alert}>
      <p>
        <span style={{ marginRight: '10px' }}>{icon}</span>
        {text}
      </p>
    </NotifWrapper>
  );
};

export default Notification;
