var gulp = require('gulp');
var eslint = require('gulp-eslint');

var src = {
  generators: ['app/index.js']
}

gulp.task('lint', function () {
  return gulp.src(src.generators)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
