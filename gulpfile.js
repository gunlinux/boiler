var gulp = require('gulp');
var postcss = require('gulp-postcss');
var eslint = require('gulp-eslint');

gulp.task('js:test', function () {
    return gulp.src(['app.js', 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('css:test', function () {
    gulp.src(['app.css'])
        .pipe(
            postcss([
                require('stylelint')(),
                require('postcss-reporter')({clearMessages: true})
            ])
        );
});


gulp.task('watch', function () {
    gulp.watch(['*.js'], ['js:test']);
    gulp.watch(['*.css'], ['css:test']);
});

gulp.task('test', ['js:test', 'css:test']);
gulp.task('default', ['test', 'watch']);
