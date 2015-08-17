var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.prompt([
      {
        name: 'scriptName',
        message: 'Your script name',
        default: this.appname
      },
      {
        name: 'scriptDescription',
        message: 'Short description of your script',
        default: 'A Hubot script.'
      }
    ], function (answers) {
      this.scriptName = answers.scriptName;
      this.scriptDescription = answers.scriptDescription;
      done();
    }.bind(this));
  },

  app: function () {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      {
        scriptName: this.scriptName,
        scriptDescription: this.scriptDescription
      }
    )
  }
});
