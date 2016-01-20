var gulp = require('gulp');
var sync = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');

var path = require('path');
var yargs = require('yargs').argv;
var tpl = require('gulp-template');
var rename = require('gulp-rename');

var paths = require('./paths');

// helper function
var resolveToComponents = function (glob) {
  glob = glob || '';
  return path.join('client', 'app/components', glob); // app/components/{glob}
};

gulp.task('build', function () {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('server', function () {
  browser({
    port: process.envPORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

// Copy html to dist/
gulp.task('copy', function () {
  return gulp.src(paths.toCopy, {base: 'client'})
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function () {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.styl, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy']);
});

gulp.task('component', function () {
  var cap = function (val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var name = yargs.name;
  var parentPath = yargs.paths || '';
  var destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(tpl({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('component', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('default', function (done) {
  sync('build', 'copy', 'server', 'watch', done);
});
