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
export default function (robot) {
  ////
  // EXAMPLES
  // Below are some example Hubot interactions. You will want to delete these
  // from your actual script.
  ////

  // The 'hear' callback will match against any chat in text, not just messages
  // directed at Hubot.
  robot.hear(/orly/i, (res) => {
    // `send` will simply post this message back to chat
    res.send('yarly');
  });

  // The `respond` callback will only match if Hubot is mentioned at the start
  // of the message. E.g.,
  //
  //   you: hubot speak
  //   you: @hubot speak
  robot.respond(/speak/i, (res) => {
    // `reply` will, naturally, reply to the original sender.
    //
    //   you: hubot speak
    //   hubot: @you Arf!
    res.reply('Arf!');

    // `emote` will "emote" the text instead of saying it. In HipChat, for
    // example, this uses the /me command.
    //
    //   you: hubot speak
    //   hubot wags its tail
    res.emote('wags its tail');
  });

  // Regex match groups are available on the Response object. The format is
  // identical to any other JavaScript regex match, so the first element of the
  // array is the full text and subsequent elements are the capture groups in
  // the order they appear.
  robot.respond(/shout (.*)/i, (res) => {
    var msg = res.match[1];
    res.send(msg.toUpperCase());
  });
};
