'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('css', () => {
    return gulp.src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src'))
});

gulp.watch('./src/scss/**/*.scss', gulp.series('css'));
gulp.task('default', gulp.series('css'));
