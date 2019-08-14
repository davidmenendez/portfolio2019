const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    proxy: 'http://localhost:3000',
  });
  gulp.watch('./src/scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;