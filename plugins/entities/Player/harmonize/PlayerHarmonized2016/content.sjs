/*
 * Create Content Plugin
 *
 * @param id         - the identifier returned by the collector
 * @param options    - an object containing options. Options are sent from Java
 *
 * @return - your content
 */
function createContent(id, options) {
  var doc = cts.doc(id);
  var root = doc.root;

  // for json we need to return the instance
   if (root && root.envelope && root.envelope.instance) {
   
   let doc = root.envelope.instance;
    return doc;
}
  // for everything else
  else {
    return doc;
  }
}

module.exports = {
  createContent: createContent
};
