/*
 * Collect IDs plugin
 *
 * @param options - a map containing options. Options are sent from Java
 *
 * @return - an array of ids or uris
 */
function collect(options) {
  // by default we return the URIs in the same collection as the Entity name
  return cts.uris(null, null, cts.collectionQuery("PlayerEuro2012"));
}

module.exports = {
  collect: collect
};
