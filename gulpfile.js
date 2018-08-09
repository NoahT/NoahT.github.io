var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var clean_css = require('gulp-clean-css');
var postcss_scss = require('postcss-scss');
var autoprefixer = require('autoprefixer');
var synchronous = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

/// add vendor prefixes, compile SCSS, write sourcemaps, and minify
gulp.task('build', function() {
  synchronous('autoprefix',
    'compile',
    'minify');
});

/// command for adding vendor prefixes
/// to sass files.
gulp.task('autoprefix', function() {
  var source = './scss/*.scss';
  var destination = './';
  var plugins = [
  autoprefixer({
    browsers: 'last 2 versions'
  })
  ];

  console.log('Adding vendor prefixes...');

  return gulp.src(source, {base: './'})
  .pipe(postcss(plugins, {
    syntax: postcss_scss
  }))
  .pipe(gulp.dest(destination));
});

/// command to compile .scss files to .css files
gulp.task('compile', function() {
  var source = './scss/*.scss';
  var maps_dest = './'
  var destination = './css/';

  console.log('Compiling SASS to CSS...');

  return gulp.src(source)
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write(maps_dest))
  .pipe(gulp.dest(destination));
});

/// command for minification of
/// compiled css files
gulp.task('minify', function() {
  var source = './css/*.css';
  var destination = './';

  console.log('Minifying css files...');

  return gulp.src(source, {base: './'})
  .pipe(clean_css({
    compatibility: 'ie9'
  }))
  .pipe(gulp.dest(destination));
});


