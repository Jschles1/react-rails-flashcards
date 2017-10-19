import React from 'react';

const FormError = () => {
  const errorStyles = { color: 'red' }
  return(
    <p style={errorStyles}>Error: All inputs must be filled.</p>
  );
}

export default FormError;