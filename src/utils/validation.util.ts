const validation = {
  name: /\w{2,}$/,
  email: /.+@.+..+/i,
  password: /^[A-Za-z0-9]\w{6,}$/,
};

export default validation;
