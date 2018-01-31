/*
 * Create Headers Plugin
 *
 * @param id       - the identifier returned by the collector
 * @param content  - the output of your content plugin
 * @param options  - an object containing options. Options are sent from Java
 *
 * @return - an object of headers
 */
function createHeaders(id, content, options) {
 var headers =
      {
        "Tournament": "Euro2012",
        "source" :"Euro2012",
        "Player" : "player"
      };
  return headers;
}

module.exports = {
  createHeaders: createHeaders
};

