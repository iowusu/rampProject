
'use strict'

/*
 * Create Content Plugin
 *
 * @param id         - the identifier returned by the collector
 * @param options    - an object containing options. Options are sent from Java
 *
 * @return - your content
 */
function createContent(id, options) {
  let doc = cts.doc(id);
  let root = doc.root.toObject();

  let source;

  // for xml we need to use xpath
  if (root && xdmp.nodeKind(root) === 'element') {
    source = root.xpath('/*:envelope/*:instance/node()');
  }
  // for json we need to return the instance
  else if (root && root.envelope && root.envelope.instance) {
    source = root.envelope.instance;
  }
  // for everything else
  else {
    source = doc;
  }

  return extractInstancePlayer(source);
}

/**
 * Creates an object instance from some source document.
 * @param source  A document or node that contains
 *   data for populating a Player
 * @return An object with extracted data and
 *   metadata about the instance.
 */
function extractInstancePlayer(source) {
  // the original source documents
  let attachments = source;

  var PlayerName = xs.string(source.name || source.Player);
  var NationalTeam = xs.string ( source.team|| source.NationalTeam)


  

  // return the instance object
  return {
    '$attachments': attachments,
    '$type': 'Product',
    '$version': '0.0.1',
    'PlayerName' : PlayerName,
    'NationalTeam':NationalTeam
  }
};
  

function makeReferenceObject(type, ref) {
  return {
    '$type': type,
    '$ref': ref
  };
}

module.exports = {
  createContent: createContent
};

