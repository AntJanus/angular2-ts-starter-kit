var gulp = require('gulp');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');

gulp.task('connect', ['copy'], function() {
  connect.server({
    root: ['./build'],
    port: 3001
  });
});

gulp.task('scripts', function() {
	return gulp.src('./src/app.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('copy', function() {

  return gulp.src(['./src/**.*', '!./src/**.ts'], {
      base: './src'
    })
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('default', ['scripts', 'copy', 'connect'], function() {
  gulp.watch(['!./src/**/**.ts', './src/**/**.*'], ['copy']);
  gulp.watch('./src/**/**.ts', ['scripts']);
});
