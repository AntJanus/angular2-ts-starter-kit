var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');

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

  return gulp.src(['./src/**/**.*', '!./src/**/**.ts'], {
      base: './src'
    })
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('build', ['scripts', 'copy']);

gulp.task('default', ['scripts', 'copy', 'connect'], function() {
  gulp.watch(['!./src/**/**.ts', './src/**/**.*'], ['copy']);
  gulp.watch('./src/**/**.ts', ['scripts']);
});
