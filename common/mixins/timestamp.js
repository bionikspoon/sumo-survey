module.exports = Model => {
  Model.observe('before save', setLastUpdated);
  Model.defineProperty('created', { type: Date, default: '$now' });
  Model.defineProperty('lastUpdated', { type: Date, default: '$now' });
  Model.validatesPresenceOf('created', 'lastUpdated');
};

/**
 * Set last updated timestamp
 * @param {object} ctx
 * @param {function} next
 * @returns {null}
 */
function setLastUpdated(ctx, next) {
  if (ctx.isNewInstance) return next();

  if (ctx.instance) ctx.instance.lastUpdated = Date.now();
  if (ctx.data) ctx.data.lastUpdated = Date.now();

  return next();
}
