var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp_tasks', {recurse: true});
gulp.task('prod', ['css']);
// gulp.task('dinamyc:compile', ['hbs:compile', 'dynamic:coffee:compile', 'dynamic:less:compile']);
// gulp.task('dinamyc:compile', ['hbs:compile', 'dynamic:coffee:compile', 'dynamic:less:compile']);
// gulp.task('static:compile', ['static:coffee:compile', 'static:less:compile', 'font:compile']);
// gulp.task('watch', ['hbs:watch', 'dynamic:coffee:watch', 'dynamic:less:watch']);
// gulp.task('server', function () {
//   return runSequence('dinamyc:compile', 'serve', 'watch');
// });
// gulp.task('default', ['static:compile' ,'server']);
//
