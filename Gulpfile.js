var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('scripts', function() {
	return gulp.src('./src/app.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('copy', function() {

  return gulp.src('./src/**.html', {
      base: './src'
    })
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('default', ['scripts', 'copy'], function() {
  gulp.watch('./src/**/**.html', ['copy']);
  gulp.watch('./src/**/**.ts', ['scripts']);
});
