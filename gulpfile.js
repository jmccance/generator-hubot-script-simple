var gulp = require('gulp');
var eslint = require('gulp-eslint');

var src = {
  generators: ['app/index.js'],
  jsTemplates: ['app/templates/js/**/*.js']
}

gulp.task('lint-generators', function () {
  return gulp.src(src.generators)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint-js-templates', function () {
  return gulp.src(src.jsTemplates)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint-generators', 'lint-js-templates']);

gulp.task('default', ['lint']);
