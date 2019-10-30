var gulp = require('gulp')

gulp.task('test', function () {
  return console.log('this is a test')
})

function parallel1() {
  return console.log('this is parallel 1')
}
function parallel2() {
  return console.log('this is parallel 2')
}

exports.default = gulp.parallel(parallel1, parallel2);
