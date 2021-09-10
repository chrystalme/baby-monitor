const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user_token'));

  if (user && user.user_token) {
    return {
      Authorization: `Bearer ${user.user_token}`,
    };
  }
  return {};
};

export default authHeader;
