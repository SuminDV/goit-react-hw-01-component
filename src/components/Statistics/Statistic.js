import React from 'react';
import PropTypes from 'prop-types';
import ss from './Statistic.module.css';

const Statistic = ({ title, stats }) => (
  <section className={ss.statistics}>
    <h2 className={ss.title}>{title}</h2>

    <ul className={ss.list}>
      {stats.map(stat => (
        <li key={stat.id}>
          <span className={ss.label}>{stat.label}</span>
          <span className={ss.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.defaultProps = {
  title: PropTypes.string,
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Statistic;
