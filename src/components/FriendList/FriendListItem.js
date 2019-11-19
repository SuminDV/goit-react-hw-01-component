import React from 'react';
import PropTypes from 'prop-types';
import st from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={st.item}>
    <span
      // style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      className={isOnline ? st.statusOnl : st.statusOff}
    />
    <img className={st.avatar} src={avatar} alt="avatar" width="48" />
    <p className={st.name}>{name}</p>
  </li>
);

// В зависимости от пропа isOnline, должен меняться цвет фона span.status.
// Это можно сделать через инлайн стиль, но лучше использовать разный CSS-класс, либо styled-components.

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
