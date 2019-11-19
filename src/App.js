import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistic from './components/Statistics/Statistic';
import stats from './components/Statistics/statistical-data.json';
import FriendsList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import Transactions from './components/TransactionsHistory/Transactions';
import transactions from './components/TransactionsHistory/transactions.json';

const App = () => (
  <div>
    <Profile user={user} />
    <Statistic title="File upload" stats={stats} />
    <FriendsList friends={friends} />
    <Transactions items={transactions} />
  </div>
);

export default App;
