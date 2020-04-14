import React from 'react';

const Input = ({ id, label, onChange, onBlur, value, error, type }) => (
  <div>
    <p>{label}</p>
    <input id={id} value={value} onChange={onChange} onBlur={onBlur} type={type ? type : 'text'} />
    <p style={{ color: 'red' }}>{error}</p>
  </div>
);

export default Input;