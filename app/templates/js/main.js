// Description:
//   <%= scriptDescription %>
//
// Dependencies:
//   "<module name>": "<module version>"
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   hubot <trigger> - <what the respond trigger does>
//   <trigger> - <what the hear trigger does>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   <github username of the original script author>
module.exports = function (robot) {
  robot.respond(/speak/i, function (res) {
    res.reply('Arf!');
  });
};
