var gulp = require('gulp');
var watch = require('gulp-watch');
var postCSS = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');

gulp.task('default', function(){
	console.log('Hurray you created a gulp task...');
});

gulp.task('html', function(){
	console.log('Imagine compiling HTML...');	
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	           .pipe(postCSS([cssVars, cssNested, autoprefixer]))
	           .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});
