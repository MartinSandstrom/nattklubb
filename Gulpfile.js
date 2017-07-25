const gulp = require('gulp');
const sass = require('gulp-sass');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy', () => {
	gulp.src(['index.html']).pipe(gulp.dest('dist/'));
	return gulp.src('./dist/**/*').pipe(ghPages());
});

gulp.task('sass', () => gulp.src('./app/sass/main.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/')));

gulp.task('sass:watch', () => gulp.watch('./app/sass/**/*.scss', ['sass']));
