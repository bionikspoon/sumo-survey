module.exports = function setStarted() {
  if (process.env.NODE_ENV !== 'production') return;

  global.STARTED = true;
};
