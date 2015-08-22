var generators = require('yeoman-generator');
var path = require('path');

var Langs = {
  CoffeeScript: 'coffee',
  JavaScript: 'js'
};

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.prompt([
      {
        name: 'scriptName',
        message: 'What is your script called?',
        default: process.cwd().split(path.sep).pop()
      },
      {
        name: 'scriptDescription',
        message: 'Provide a short description for your script:',
        default: 'A Hubot script.'
      },
      {
        name: 'scriptLang',
        message: 'What language would you like to use?',
        type: 'list',
        choices: [
          {
            name: 'CoffeeScript',
            value: Langs.CoffeeScript
          },
          {
            name: 'JavaScript',
            value: Langs.JavaScript
          }
        ],
        default: Langs.CoffeeScript
      }
    ], function (answers) {
      this.scriptName = answers.scriptName;
      this.scriptDescription = answers.scriptDescription;
      this.scriptLang = answers.scriptLang;
      done();
    }.bind(this));
  },

  app: function () {
    var context = {
      scriptName: this.scriptName,
      scriptDescription: this.scriptDescription,
      scriptLang: this.scriptLang
    };

    this.fs.copyTpl(
      this.templatePath('*'),
      this.destinationPath(),
      context
    );

    this.fs.copyTpl(
      this.templatePath(this.scriptLang),
      this.destinationPath('scripts'),
      context
    );
  },

  install: function () {
    if (this.scriptLang == Langs.CoffeeScript) {
      this.npmInstall(['coffee-script', 'hubot'], { 'saveDev': true });
    }
  }
});
