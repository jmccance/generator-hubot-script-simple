# Description:
#   <%= scriptDescription %>
#
# Dependencies:
#   "<module name>": "<module version>"
#
# Configuration:
#   LIST_OF_ENV_VARS_TO_SET
#
# Commands:
#   hubot <trigger> - <what the respond trigger does>
#   <trigger> - <what the hear trigger does>
#
# Notes:
#   <optional notes required for the script>
#
# Author:
#   <github username of the original script author>
module.exports = (robot) ->
  ##
  # EXAMPLES
  # Below are some example Hubot interactions. You will want to delete these
  # from your actual script.
  ##

  ##
  # 'hear' will match against any chat in text, not just messages directed at
  # Hubot.
  robot.hear /orly/i, (res) ->
    # res.send will simply post this text back into chat
    res.send 'yarly'

  ##
  # 'respond' only matches against messages directed at Hubot. E.g.,
  # `@hubot speak`
  robot.respond /speak/i, (res) ->
    # res.reply with, naturally, reply to the original sender
    # E.g., '@bob Arf!'
    res.reply 'Arf!'
    # res.emote will 'emote' the response, a la the /me HipChat command.
    # E.g. 'skibot wags its tail'.
    res.emote 'wags its tail.'

  ##
  # Use regex groups to capture portions of the response.
  robot.respond /shout (.*)/i, (res) ->
    [_, msg] = res.match
    res.send msg.toUpperCase()
