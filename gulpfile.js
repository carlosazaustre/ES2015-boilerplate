var gulp = require('gulp')
var gutil = require('gulp-util')
var webserver = require('gulp-webserver')
var browserify = require('browserify')
var babelify = require('babelify')
var watchify = require('watchify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

var config = {
  scripts: {
    watch: './src/scripts/**/*.js',
    input: './src/scripts/app.js',
    output: './build'
  }
}

// -- Helper

function _bundle (browserifyFile) {
  return browserifyFile.bundle()
    .on('error', function (err) {
      var error = new gutil.PluginError('browserify', err)
      console.log(error.toString())
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(config.scripts.output))
}

// -- Tasks --------------------------------------------------------------------

gulp.task('serve', function () {
  gulp.src('config.scripts.output')
    .pipe(webserver({
      livereload: true,
      port: 8080,
      host: '0.0.0.0'
    }))
})

gulp.task('copy', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
})

gulp.task('build', ['copy'], function () {
  var b = browserify(config.scripts.input)
    .transform(babelify)

  return _bundle(b)
})

gulp.task('watch', function () {
  var b = browserify(config.scripts.input)
    .transform(babelify)

  var w = watchify(b)
    .on('update', function () {
      _bundle(w)
    })
    .on('log', gutil.log)

  return _bundle(w)
})

gulp.task('default', ['copy', 'build', 'watch', 'serve'])
