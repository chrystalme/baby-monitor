export const user = {
  id: '1',
  name: 'Mr Tester',
  email: 'test@tester.com',
};

export const measure = {
  id: '1',
  title: 'Head circumference',
  description: 'Circular measurement of the head',
  unit: 'cm',
};

export const measurement = {
  id: '1',
  user_id: '1',
  measure_id: '1',
  value: '35',
};

export const error = {
  msg: 'invalid credentials',
  status: 422,
  id: null,
};

export const auth = {
  token: localStorage.getItem('user_token'),
  isAuthenticated: true,
  isLoading: false,
  user: null,
};
