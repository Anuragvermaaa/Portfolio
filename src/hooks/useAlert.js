import { useState } from 'react';

const useAlert = (initialState = { show: false, text: '', type: 'danger' }) => {
  const [alert, setAlert] = useState(initialState);

  const showAlert = ({ text, type = 'danger' }) => setAlert({
    show: true,
    text,
    type,
  });

  const hideAlert = () => setAlert({ ...alert, show: false });

  return { alert, showAlert, hideAlert };
};

export default useAlert;