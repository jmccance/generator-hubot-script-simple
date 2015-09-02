var generators = require('yeoman-generator');
var path = require('path');

var Langs = {
  CoffeeScript: 'coffee',
  EcmaScript6: 'es6',
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
            name: 'EcmaScript 6',
            value: Langs.EcmaScript6
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

      if (this.scriptLang == Langs.EcmaScript6) {
        this.preStartScript = '"prestart": "gulp",';
      }

      done();
    }.bind(this));
  },

  app: function () {
    var context = {
      scriptName: this.scriptName,
      scriptDescription: this.scriptDescription,
      scriptLang: this.scriptLang,
      preStartScript: this.preStartScript
    };

    this.fs.copyTpl(
      this.templatePath('shared/**/*'),
      this.destinationPath(),
      context
    );

    this.fs.copyTpl(
      this.templatePath(this.scriptLang + '/**/*'),
      this.destinationPath(),
      context
    );

    // Hack because mem-fs-editor is not properly copying over the glob options.
    this.fs.copy(
      this.templatePath(this.scriptLang + '/**/.*'),
      this.destinationPath()
    );
  },

  install: function () {
    this.npmInstall(['coffee-script', 'hubot'], { 'saveDev': true });

    switch (this.scriptLang) {
      case Langs.EcmaScript6:
        this.npmInstall(
          [
            'babel-eslint',
            'del',
            'gulp',
            'gulp-babel',
            'gulp-eslint'
          ],
          { 'saveDev': true });
        break;

      default:
    }
  }
});
