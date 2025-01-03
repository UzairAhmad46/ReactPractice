import React from 'react';
import PropTypes from 'prop-types';

const Practice = (props) => {
  return (
    <div className="style">
      <p>NAME : {props.name}</p>
      <p>Age : {props.Age}</p>
      <p>Student : {props.isStudent ? 'yes' : 'No'}</p>
    </div>
  );
};
Practice.propTypes = {
  name: PropTypes.string,
  Age: PropTypes.number,
};

Practice.defaultProps = {
  name: 'Guest',
  Age: 0,
  isStudent: false,
};

export default Practice;
