import React from 'react';
import PropTypes from 'prop-types';
import style from './Transactions.module.css';

const Transactions = ({ items }) => (
  <table className={style.transaction}>
    <thead>
      <tr>
        <th className={style.th}>type</th>
        <th className={style.th}>amount</th>
        <th className={style.th}>currency</th>
      </tr>
    </thead>

    <tbody className={style.tbody}>
      {items.map(item => (
        <tr className={style.tr} key={item.id}>
          <th className={style.th2}>{item.type}</th>
          <th className={style.th2}>{item.amount}</th>
          <th className={style.th2}>{item.currency}</th>
        </tr>
      ))}
    </tbody>
  </table>
);

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Transactions;
