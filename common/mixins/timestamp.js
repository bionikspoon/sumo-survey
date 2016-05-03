module.exports = function timestamp(Model) {
  Model.observe('before save', setLastUpdated);
  Model.defineProperty('created', { type: Date, default: '$now' });
  Model.defineProperty('lastUpdated', { type: Date, default: '$now' });
};

/**
 * Set last updated time stamp.
 * @param {object} ctx
 * @param {function} next
 * @returns {null}
 */
function setLastUpdated(ctx, next) {
  if (!ctx.isNewInstance) ctx.instance.lastUpdated = Date.now();

  return next();
}
