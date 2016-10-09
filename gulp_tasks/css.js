var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var merge = require('streamqueue');
var gulpPlumber = require('gulp-plumber');

var handleError = function (err) {
  gutil.log(err.toString());
  this.emit('end');
};

var plumber = function () {
  return gulpPlumber({ errorHandler : handleError });
};

//------------------------------------------------
// static LESS
//------------------------------------------------
var cssSource = [
  "./bower_components/normalize-css/normalize.css",
  // "./bower_components/font-awesome/css/font-awesome.min.css",
  // "./bower_components/bootstrap/dist/css/bootstrap.min.css",
  // "./bower_components/todc-bootstrap/dist/css/todc-bootstrap.min.css"
];

var lessSource = [
  // "./bower_components/paper/bootswatch.less",
  // "./bower_components/paper/variables.less"
];

gulp.task('css', function () {
  var cssStream = gulp.src( cssSource )
  .on('error', handleError)
  .pipe(concat('css.css'));

  var lessStream = gulp.src( lessSource )
  .on('error', handleError)
  .pipe(plumber())
  .pipe(less())
  .pipe(concat('less.css'));

  var mergedStream = merge({ objectMode: true },cssStream, lessStream)
  .pipe(concat('style.css'))
  .pipe(minify()) // sourcemapsのコメントがウザイので開発でもminifyする
  .pipe(gulp.dest('./public/css'));
  return mergedStream;

})
