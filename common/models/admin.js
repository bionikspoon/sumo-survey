module.exports = function setup(Admin) {
  Admin.validatesPresenceOf('email', 'status', 'username');

  Admin.validatesLengthOf('email', { max: 256 });
  Admin.validatesFormatOf('email', {
    with: /^[a-z0-9+_.-]+@[a-z0-9+_.-]+$/i,
    message: 'must be a valid email address',
  });

  Admin.validatesLengthOf('status', { max: 64 });
  Admin.validatesFormatOf('status', { with: /^[a-z ]+$/ });

  Admin.validatesLengthOf('username', { max: 32 });
  Admin.validatesFormatOf('username', { with: /^[a-z]\w{2,}$/ });
};
