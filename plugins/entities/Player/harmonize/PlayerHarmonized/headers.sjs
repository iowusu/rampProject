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
	let source =  JSON.parse(content)
	let PlayerName = (source.name || source.Player);
    let NationalTeam =  ( source.Team|| source.NationalTeam);

 let header = {
   "Tournament"  : "Euro2012",
   "DocType" : "Player",
   "PlayerName" : PlayerName,
   "NationalTeam" : NationalTeam
 };
  return header;
}

module.exports = {
  createHeaders: createHeaders
};
