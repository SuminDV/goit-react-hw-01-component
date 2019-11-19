import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import st from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={st.friendList}>
    {friends.map(el => (
      <FriendListItem
        key={el.id}
        name={el.name}
        avatar={el.avatar}
        isOnline={el.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendList;
