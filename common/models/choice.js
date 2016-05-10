module.exports = function setup(Choice) {
  Choice.validatesPresenceOf('text', 'order');
  Choice.validatesLengthOf('text', { max: 512 });
  Choice.validatesNumericalityOf('order', { int: true });
};
