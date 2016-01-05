var gulp = require('gulp');
var sync = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');
var todo = require('gulp-todoist');

var config = require('./config');

var paths = {
  entry: config.entry,
  app: [config.appFolder + '**/*.{js,css.html}'],
  js: config.appFolder + '**/*!(.spec.js).js',
  css: config.appFolder + '**/*.css',
  toCopy: [config.index],
  dest: 'dist'
};

gulp.task('todo', function() {
  return gulp.src(paths.js)
    .pipe(todo({silent: false, verbose: true}));
});

gulp.task('build', ['todo'], function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('server', function() {
  browser({
    port: process.envPORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

//Copy html to dist/
gulp.task('copy', function () {
  return gulp.src(paths.toCopy, {base: 'client'})
    .pipe(gulp.dest(paths.dest));
});


gulp.task('watch', function () {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy']);
});


gulp.task('default', function (done) {
  sync('build', 'copy', 'server', 'watch', done);
});

