// Núcleo do Gulp
var gulp = require('gulp');

// Gulp to compile Sass
var sass = require("gulp-sass");


gulp.task('sass', function (done) {
     gulp.src('assets/stylesheets/application.sass')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('assets/css/'))
         .on('end', done);
});

gulp.task('default', ['sass']);

gulp.task('watch', ['sass'], function () {
    gulp.watch('assets/stylesheets/**/*.sass', ['sass']);
});

