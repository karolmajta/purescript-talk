var gulp = require('gulp');
var purescript = require('gulp-purescript');

gulp.task('purescript:browser', function () {
  return gulp.src(['src/**/*.purs', 'bower_components/**/src/**/*.purs'])
    .pipe(purescript.psc({main: 'Talk', output: 'app.js'}))
    .pipe(gulp.dest('build'));
});

gulp.task('purescript:node', function () {
  return gulp.src(['src/**/*.purs', 'bower_components/**/src/**/*.purs'])
    .pipe(purescript.pscMake({output: 'purescript_modules'}))
});

gulp.task('purescript:psci', function () {
  return gulp.src(['src/**/*.purs', 'bower_components/**/src/**/*.purs', '!src/**/Talk.purs'])
    .pipe(purescript.dotPsci());
});

gulp.task('default', ['purescript:browser', 'purescript:node', 'purescript:psci']);
