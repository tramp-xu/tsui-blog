import WithLogin from './withLogin';

const Logout = WithLogin(() => {
  return 'login';
});

export default Logout;