'use strict'

const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    autoprefixer = require('autoprefixer-core'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

gulp.task('styles', () => {
    let preprocessors = [
        autoprefixer({browsers: 'last 2 version'})
    ]

    return gulp.src('./stylesheets/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(preprocessors))
        .pipe(gulp.dest('./stylesheets/dest'));
})

gulp.task('watch:styles', () => {
    gulp.watch('./stylesheets/*.scss', ['styles']);
})

