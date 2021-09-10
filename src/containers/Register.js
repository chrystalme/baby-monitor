import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { getReg } from '../actions';
// import { register } from '../actions/authActions';
import Nav from '../components/Nav';
// import axiosInstance from '../helpers/axios';
import style from '../style/login.module.css';

// import Register from '../components/Register';

const RegisterUser = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = inputs;
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const data = {
    name,
    email,
    password,
  };

  const config = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/JSON' },
    body: data,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(config);
    // console.log(reg());
  };

  // useEffect(async () => {

  // });

  return (
    <>
      <Nav name="Register" />
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.itemContainer}>
            <input type="text" value={name} name="name" id="name" placeholder="Enter your name" required onChange={handleChange} />
            <input type="email" value={email} name="email" id="email" placeholder="Enter your email" required onChange={handleChange} />
            <input type="password" value={password} name="password" id="password" placeholder="Enter your password" required onChange={handleChange} />
            <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm password" required />
            <input className={style.btn} type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // register: (name, email, password) => dispatch(register(book)),
  getReg: (data) => dispatch(getReg(data)),
});

// RegisterUser.propTypes = {
//   requestLogin: PropTypes.func.isRequired,
// };

const ConnectedComponent = connect(null, mapDispatchToProps)(RegisterUser);

export default ConnectedComponent;
