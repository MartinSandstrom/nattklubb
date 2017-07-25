const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./app/sass/main.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./app/sass/**/*.scss', ['sass']);
});