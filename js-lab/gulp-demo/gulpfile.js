var gulp = require('gulp');
var rename = require('gulp-rename');
var watch = require("gulp-watch");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('build', () => {

  return browserify({
      entries : ["src/main.js"]
    })
    .bundle()
    .pipe(source('src/main.js'))
    .pipe(buffer())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('dist/'))

});

gulp.task('watch', done => {
  watch('src/', gulp.series('build'))
  done();
});

gulp.task('default', gulp.series('build'))
