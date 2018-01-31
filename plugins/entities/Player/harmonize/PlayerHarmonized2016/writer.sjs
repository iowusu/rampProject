/*~
 * Writer Plugin
 *
 * @param id       - the identifier returned by the collector
 * @param envelope - the final envelope
 * @param options  - an object options. Options are sent from Java
 *
 * @return - nothing
 */
function write(id, envelope, options) {

	let docJson = JSON.parse(envelope);
	let idNew = "2016/"+docJson.envelope.instance.name +".json";
	
  xdmp.documentInsert(idNew, envelope, xdmp.defaultPermissions(), options.entity);
}

module.exports = write;
