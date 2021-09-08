import React, { useEffect } from 'react';
import { register } from '../actions/register';

import Register from '../components/Register';

const RegisterUser = () => {
  useEffect(() => {
    register();
  }, []);

  return (
    <Register header="Register" />
  );
};

export default RegisterUser;
