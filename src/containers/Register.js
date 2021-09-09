import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { getReg, requestLogin } from '../actions';
import { register } from '../actions/register';
import Nav from '../components/Nav';
import style from '../style/login.module.css';

// import Register from '../components/Register';

const RegisterUser = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = inputs;
  // const dispatch = useDispatch();

  const data = {
    name,
    email,
    password,
  };

  const config = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data,
  };

  const fetchRegister = () => (dispatch) => {
    const response = register(config);
    dispatch(getReg(response.data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(config);
  };
  useEffect(() => {
    if (!localStorage.getItem('token')) { register(config); }
    fetchRegister();
  }, []);

  return (
    <>
      <Nav name="Register" />
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.itemContainer}>
            <input type="text" name="name" id="" placeholder="Enter your name" required onChange={handleChange} />
            <input type="email" name="email" id="" placeholder="Enter your email" required onChange={handleChange} />
            <input type="password" name="password" id="" placeholder="Enter your password" required onChange={handleChange} />
            <input type="password" name="password_confirmation" id="" placeholder="Confirm password" required />
            <input className={style.btn} type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  requestLogin: (book) => dispatch(requestLogin(book)),
});

// RegisterUser.propTypes = {
//   requestLogin: PropTypes.func.isRequired,
// };

const ConnectedComponent = connect(null, mapDispatchToProps)(RegisterUser);

export default ConnectedComponent;
