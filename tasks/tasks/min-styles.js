var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var paths = require('../paths');

gulp.task('min-css', function () {
    return gulp.src(paths.style)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(paths.release.styles))
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest(paths.release.styles));
});