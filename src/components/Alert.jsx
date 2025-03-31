import React, { useEffect } from 'react';

const Alert = ({ type, text, showAlert, hideAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideAlert();
    }, 3000);

    return () => clearTimeout(timer);
  }, [hideAlert]);

  return (
    <div className={`alert alert-${type} fixed top-20 left-1/2 -translate-x-1/2 z-50`}>
      {text}
    </div>
  );
};

export default Alert;